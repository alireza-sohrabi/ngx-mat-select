import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  confirmationPhrase,
  getRelease,
  readPackageVersions,
  ReleaseError,
  resolveReleaseRepository,
} from '../src/release.mjs';

test('release policy permits the chronological Angular 17 through 21 release train', () => {
  assert.equal(getRelease('17.0.0').tag, 'angular17');
  assert.equal(getRelease('17.0.0').branch, 'release/17.0.0');
  assert.equal(getRelease('18.0.0').prerequisite, '17.0.0');
  assert.equal(getRelease('19.0.0').prerequisite, '18.0.0');
  assert.equal(getRelease('20.0.0').prerequisite, '19.0.0');
  assert.equal(getRelease('21.0.0-next.0').prerequisite, '20.0.0');
  assert.equal(getRelease('21.0.0').tag, 'latest');
  assert.equal(getRelease('21.0.0').prerequisite, '21.0.0-next.0');
  assert.throws(() => getRelease('16.0.5'), ReleaseError);
  assert.throws(() => getRelease('21.0.1'), ReleaseError);
});

test('confirmation phrase binds the package, version, and dist-tag', () => {
  assert.equal(
    confirmationPhrase('17.0.0'),
    'publish ngx-mat-select@17.0.0 with tag angular17',
  );
  assert.equal(
    confirmationPhrase('20.0.0'),
    'publish ngx-mat-select@20.0.0 with tag angular20',
  );
  assert.equal(
    confirmationPhrase('21.0.0-next.0'),
    'publish ngx-mat-select@21.0.0-next.0 with tag next',
  );
  assert.equal(
    confirmationPhrase('21.0.0'),
    'publish ngx-mat-select@21.0.0 with tag latest',
  );
});

test('historical releases resolve to isolated worktrees', () => {
  const root = path.resolve('D:\\ngx-mat-select');
  assert.equal(resolveReleaseRepository('17.0.0', root), path.resolve(`${root}-release-17`));
  assert.equal(resolveReleaseRepository('20.0.0', root), path.resolve(`${root}-release-20`));
  assert.equal(resolveReleaseRepository('21.0.0-next.0', root), root);
});

test('package version reader rejects a different library package', async () => {
  const repositoryPath = await mkdtemp(path.join(tmpdir(), 'publisher-test-'));
  try {
    await mkdir(path.join(repositoryPath, 'projects', 'ngx-mat-select'), { recursive: true });
    await writeFile(
      path.join(repositoryPath, 'package.json'),
      JSON.stringify({ name: 'workspace', version: '21.0.0' }),
    );
    await writeFile(
      path.join(repositoryPath, 'projects', 'ngx-mat-select', 'package.json'),
      JSON.stringify({ name: 'different-package', version: '21.0.0' }),
    );
    await assert.rejects(() => readPackageVersions(repositoryPath), ReleaseError);
  } finally {
    await rm(repositoryPath, { recursive: true, force: true });
  }
});
