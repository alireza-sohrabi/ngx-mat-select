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
} from '../src/release.mjs';

test('release policy only permits the Angular 21 prerelease and final release', () => {
  assert.deepEqual(getRelease('21.0.0-next.0'), { tag: 'next', prerequisite: null });
  assert.deepEqual(getRelease('21.0.0'), {
    tag: 'latest',
    prerequisite: '21.0.0-next.0',
  });
  assert.throws(() => getRelease('20.0.0'), ReleaseError);
  assert.throws(() => getRelease('21.0.1'), ReleaseError);
});

test('confirmation phrase binds the package, version, and dist-tag', () => {
  assert.equal(
    confirmationPhrase('21.0.0-next.0'),
    'publish ngx-mat-select@21.0.0-next.0 with tag next',
  );
  assert.equal(
    confirmationPhrase('21.0.0'),
    'publish ngx-mat-select@21.0.0 with tag latest',
  );
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
