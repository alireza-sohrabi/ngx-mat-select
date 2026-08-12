import { execFileSync } from 'node:child_process';
import {
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';

const major = process.argv[2];
const withSsr = process.argv.includes('--ssr');
const packageRootIndex = process.argv.indexOf('--package-root');
const versions = {
  '17': { angular: '17.3.12', cli: '17.3.17', material: '17.3.10' },
  '18': { angular: '18.2.14', cli: '18.2.21', material: '18.2.14' },
  '19': { angular: '19.2.25', cli: '19.2.27', material: '19.2.19' },
  '20': { angular: '20.3.27', cli: '20.3.33', material: '20.2.14' },
  '21': { angular: '21.2.19', cli: '21.2.20', material: '21.2.14' },
  '22': { angular: '22.1.1', cli: '22.1.3', material: '22.1.1' },
};

if (!major || !versions[major]) {
  throw new Error(
    'Usage: node scripts/verify-consumer.mjs <angular-major> [--ssr] [--package-root <path>]',
  );
}
if (packageRootIndex >= 0 && !process.argv[packageRootIndex + 1]) {
  throw new Error('--package-root requires a path.');
}

const root = packageRootIndex >= 0
  ? resolve(process.argv[packageRootIndex + 1])
  : resolve(import.meta.dirname, '..');
const workspace = mkdtempSync(join(tmpdir(), `ngx-mat-select-angular-${major}-`));
const npmCli = process.env.npm_execpath;
if (!npmCli) throw new Error('Run this verifier through an npm script.');
const npxCli = join(dirname(npmCli), 'npx-cli.js');

function run(command, args, cwd = root) {
  execFileSync(command, args, { cwd, stdio: 'inherit' });
}

const runNpm = (args, cwd = root) => run(process.execPath, [npmCli, ...args], cwd);
const runNpx = (args, cwd = root) => run(process.execPath, [npxCli, ...args], cwd);

try {
  runNpm(['run', 'build:library']);
  const packResult = execFileSync(
    process.execPath,
    [npmCli, 'pack', './dist/ngx-mat-select', '--json'],
    { cwd: root, encoding: 'utf8' }
  );
  const [{ filename }] = JSON.parse(packResult);
  const tarball = resolve(root, filename);

  const generateArgs = [
    '--yes',
    '--package',
    `@angular/cli@${versions[major].cli}`,
    'ng',
    'new',
    'consumer',
    '--directory',
    basename(workspace),
    '--skip-git',
    '--skip-install',
    '--routing=false',
    '--style=scss',
    '--standalone=false',
    '--defaults',
  ];
  if (withSsr) generateArgs.push('--ssr');
  if (Number(major) >= 21) generateArgs.push('--test-runner=karma');
  runNpx(generateArgs, tmpdir());

  writeFileSync(
    join(workspace, 'src/app/app.component.ts'),
    `import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly foods = [
    { value: 'steak', label: 'Steak' },
    { value: 'pizza', label: 'Pizza' },
    { value: 'tacos', label: 'Tacos' }
  ];
  readonly food = new FormControl<string | null>(null);
}
`
  );

  writeFileSync(
    join(workspace, 'src/app/app.component.html'),
    `<mat-form-field>
  <mat-label>Food</mat-label>
  <ngx-mat-select clientSide [formControl]="food" [hasSearchBox]="true"
    [options]="foods" optionLabel="label" optionValue="value">
  </ngx-mat-select>
</mat-form-field>
<p id="selected-value">{{ food.value }}</p>
`
  );
  writeFileSync(join(workspace, 'src/app/app.component.scss'), '');

  writeFileSync(
    join(workspace, 'src/app/app.module.ts'),
    `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectModule } from 'ngx-mat-select';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule,
    MatFormFieldModule, NgxMatSelectModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
`
  );

  writeFileSync(
    join(workspace, 'src/app/app.component.spec.ts'),
    `import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectModule } from 'ngx-mat-select';
import { AppComponent } from './app.component';

describe('packed ngx-mat-select', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [BrowserAnimationsModule, ReactiveFormsModule,
        MatFormFieldModule, NgxMatSelectModule]
    }).compileComponents();
  });

  it('supports forms, search, overlay, and virtual scrolling', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const trigger = fixture.nativeElement.querySelector('ngx-mat-select');
    trigger.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(document.querySelector('.cdk-overlay-pane')).toBeTruthy();
    expect(document.querySelector('ngx-mat-select-search-box')).toBeTruthy();
    expect(document.querySelector('cdk-virtual-scroll-viewport')).toBeTruthy();
  });
});
`
  );

  writeFileSync(
    join(workspace, 'src/styles.scss'),
    `@use '@angular/material' as mat;
@use 'ngx-mat-select' as ngx-mat-select;

@include mat.core();
$theme: mat.${Number(major) >= 18 ? 'm2-' : ''}define-light-theme((color: (
  primary: mat.${Number(major) >= 18 ? 'm2-' : ''}define-palette(mat.$${Number(major) >= 18 ? 'm2-' : ''}indigo-palette),
  accent: mat.${Number(major) >= 18 ? 'm2-' : ''}define-palette(mat.$${Number(major) >= 18 ? 'm2-' : ''}pink-palette)
)));
@include mat.all-component-themes($theme);
@include ngx-mat-select.theme($theme);
`
  );

  runNpm(['install'], workspace);
  runNpm([
    'install',
    `@angular/animations@${versions[major].angular}`,
    `@angular/material@${versions[major].material}`,
    `@angular/cdk@${versions[major].material}`,
    tarball,
  ], workspace);
  runNpm(['ci'], workspace);
  runNpm(['test', '--', '--watch=false', '--browsers=ChromeHeadless', '--progress=false'], workspace);
  runNpm(['run', 'build', '--', '--configuration', 'production'], workspace);

  if (withSsr) {
    const angularConfig = readFileSync(join(workspace, 'angular.json'), 'utf8');
    if (!angularConfig.includes('server')) {
      throw new Error('SSR output was not configured by the Angular CLI');
    }
  }
} finally {
  rmSync(workspace, { recursive: true, force: true });
}
