import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

export const PACKAGE_NAME = 'ngx-mat-select';
export const RELEASES = Object.freeze({
  '17.0.0': Object.freeze({
    tag: 'angular17',
    prerequisite: null,
    branch: 'release/17.0.0',
    angularMajors: ['17'],
    repositorySuffix: '-release-17',
  }),
  '18.0.0': Object.freeze({
    tag: 'angular18',
    prerequisite: '17.0.0',
    branch: 'release/18.0.0',
    angularMajors: ['18'],
    repositorySuffix: '-release-18',
  }),
  '19.0.0': Object.freeze({
    tag: 'angular19',
    prerequisite: '18.0.0',
    branch: 'release/19.0.0',
    angularMajors: ['19'],
    repositorySuffix: '-release-19',
  }),
  '20.0.0': Object.freeze({
    tag: 'angular20',
    prerequisite: '19.0.0',
    branch: 'release/20.0.0',
    angularMajors: ['20'],
    repositorySuffix: '-release-20',
  }),
  '21.0.0-next.0': Object.freeze({
    tag: 'next',
    prerequisite: '20.0.0',
    branch: 'master',
    angularMajors: ['21', '22'],
    repositorySuffix: '',
  }),
  '21.0.0': Object.freeze({
    tag: 'latest',
    prerequisite: '21.0.0-next.0',
    branch: 'master',
    angularMajors: ['21', '22'],
    repositorySuffix: '',
  }),
});

const MAX_OUTPUT_LENGTH = 12000;

export class ReleaseError extends Error {
  constructor(message, details = undefined) {
    super(message);
    this.name = 'ReleaseError';
    this.details = details;
  }
}

export function getRelease(version) {
  const release = RELEASES[version];
  if (!release) {
    throw new ReleaseError(
      `Unsupported release ${version}. Allowed releases: ${Object.keys(RELEASES).join(', ')}.`,
    );
  }
  return release;
}

export function confirmationPhrase(version) {
  const { tag } = getRelease(version);
  return `publish ${PACKAGE_NAME}@${version} with tag ${tag}`;
}

export function resolveRepository(repositoryPath = process.env.NGX_MAT_SELECT_REPO) {
  const configuredPath = repositoryPath || 'D:\\ngx-mat-select';
  return path.resolve(configuredPath);
}

export function resolveReleaseRepository(version, repositoryPath = resolveRepository()) {
  const release = getRelease(version);
  return path.resolve(`${repositoryPath}${release.repositorySuffix}`);
}

function commandInvocation(command, args) {
  if (process.platform === 'win32' && command === 'npm') {
    return {
      executable: process.execPath,
      args: [
        path.join(path.dirname(process.execPath), 'node_modules', 'npm', 'bin', 'npm-cli.js'),
        ...args,
      ],
    };
  }
  return { executable: command, args };
}

export async function run(command, args, options = {}) {
  const { cwd, timeoutMs = 30 * 60 * 1000, allowFailure = false } = options;
  let npmConfigDirectory;
  let commandEnvironment = process.env;

  if (command === 'npm' && process.env.NPM_TOKEN) {
    npmConfigDirectory = await mkdtemp(path.join(tmpdir(), 'ngx-mat-select-npm-auth-'));
    const npmConfigPath = path.join(npmConfigDirectory, '.npmrc');
    await writeFile(
      npmConfigPath,
      `//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}\n`,
      { encoding: 'utf8', mode: 0o600 },
    );
    commandEnvironment = {
      ...process.env,
      NPM_CONFIG_USERCONFIG: npmConfigPath,
    };
  }

  try {
    return await new Promise((resolve, reject) => {
      const invocation = commandInvocation(command, args);
      const child = spawn(invocation.executable, invocation.args, {
        cwd,
        env: commandEnvironment,
        shell: false,
        windowsHide: true,
      });
      let stdout = '';
      let stderr = '';

      const append = (current, chunk) => (current + chunk.toString()).slice(-MAX_OUTPUT_LENGTH);
      child.stdout.on('data', (chunk) => { stdout = append(stdout, chunk); });
      child.stderr.on('data', (chunk) => { stderr = append(stderr, chunk); });

      const timer = setTimeout(() => {
        child.kill();
        reject(new ReleaseError(`${command} timed out after ${timeoutMs}ms.`));
      }, timeoutMs);

      child.on('error', (error) => {
        clearTimeout(timer);
        reject(new ReleaseError(`Unable to run ${command}: ${error.message}`));
      });

      child.on('close', (code) => {
        clearTimeout(timer);
        const result = { code, stdout: stdout.trim(), stderr: stderr.trim() };
        if (code !== 0 && !allowFailure) {
          reject(new ReleaseError(
            `${command} ${args.join(' ')} failed with exit code ${code}.`,
            result.stderr || result.stdout,
          ));
          return;
        }
        resolve(result);
      });
    });
  } finally {
    if (npmConfigDirectory) {
      await rm(npmConfigDirectory, { recursive: true, force: true });
    }
  }
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, 'utf8'));
}

export async function readPackageVersions(repositoryPath) {
  const rootPackage = await readJson(path.join(repositoryPath, 'package.json'));
  const libraryPackage = await readJson(
    path.join(repositoryPath, 'projects', PACKAGE_NAME, 'package.json'),
  );

  if (libraryPackage.name !== PACKAGE_NAME) {
    throw new ReleaseError(
      `Expected the library package name to be ${PACKAGE_NAME}, found ${libraryPackage.name}.`,
    );
  }

  return {
    workspace: rootPackage.version,
    library: libraryPackage.version,
  };
}

export async function registryVersionExists(repositoryPath, version) {
  const result = await run(
    'npm',
    ['view', `${PACKAGE_NAME}@${version}`, 'version', '--json'],
    { cwd: repositoryPath, allowFailure: true, timeoutMs: 60000 },
  );
  return result.code === 0 && result.stdout.includes(version);
}

export async function getStatus(repositoryPath = resolveRepository()) {
  const versions = await readPackageVersions(repositoryPath);
  const [branchResult, changesResult, registryResult, authResult] = await Promise.all([
    run('git', ['branch', '--show-current'], { cwd: repositoryPath }),
    run('git', ['status', '--porcelain'], { cwd: repositoryPath }),
    run('npm', ['view', PACKAGE_NAME, 'version', '--json'], {
      cwd: repositoryPath,
      allowFailure: true,
      timeoutMs: 60000,
    }),
    run('npm', ['whoami'], {
      cwd: repositoryPath,
      allowFailure: true,
      timeoutMs: 60000,
    }),
  ]);

  return {
    package: PACKAGE_NAME,
    repositoryPath,
    branch: branchResult.stdout,
    clean: changesResult.stdout.length === 0,
    packageVersions: versions,
    registryLatest: registryResult.code === 0
      ? registryResult.stdout.replaceAll('"', '')
      : null,
    npmAuthenticated: authResult.code === 0,
    npmUser: authResult.code === 0 ? authResult.stdout : null,
    allowedReleases: Object.entries(RELEASES).map(([version, release]) => ({
      version,
      tag: release.tag,
      branch: release.branch,
      repositoryPath: resolveReleaseRepository(version, repositoryPath),
      confirmation: confirmationPhrase(version),
    })),
  };
}

async function assertReleaseState(repositoryPath, version) {
  const release = getRelease(version);
  const versions = await readPackageVersions(repositoryPath);

  if (versions.workspace !== version || versions.library !== version) {
    throw new ReleaseError(
      `Both package manifests must be version ${version}. `
      + `Found workspace ${versions.workspace} and library ${versions.library}.`,
    );
  }

  const branch = await run('git', ['branch', '--show-current'], { cwd: repositoryPath });
  if (branch.stdout !== release.branch) {
    throw new ReleaseError(
      `${version} must be released from ${release.branch}, not ${branch.stdout || 'detached HEAD'}.`,
    );
  }

  const changes = await run('git', ['status', '--porcelain'], { cwd: repositoryPath });
  if (changes.stdout) {
    throw new ReleaseError('The repository must be clean before validation or publishing.');
  }

  const automationRepository = resolveRepository();
  if (path.resolve(repositoryPath) !== automationRepository) {
    const automationBranch = await run(
      'git',
      ['branch', '--show-current'],
      { cwd: automationRepository },
    );
    const automationChanges = await run(
      'git',
      ['status', '--porcelain'],
      { cwd: automationRepository },
    );
    if (automationBranch.stdout !== 'master' || automationChanges.stdout) {
      throw new ReleaseError(
        'Historical releases require the clean automation repository on master.',
      );
    }
  }

  if (await registryVersionExists(repositoryPath, version)) {
    throw new ReleaseError(`${PACKAGE_NAME}@${version} is already published.`);
  }

  const auth = await run('npm', ['whoami'], {
    cwd: repositoryPath,
    allowFailure: true,
    timeoutMs: 60000,
  });
  if (auth.code !== 0) {
    throw new ReleaseError(
      'npm authentication is required. Set NPM_TOKEN for Codex or run npm login, then restart Codex.',
    );
  }

  return { release, npmUser: auth.stdout };
}

async function assertPrerequisite(repositoryPath, version, release) {
  if (release.prerequisite && !await registryVersionExists(repositoryPath, release.prerequisite)) {
    throw new ReleaseError(
      `${PACKAGE_NAME}@${release.prerequisite} must be published before ${version}.`,
    );
  }
}

async function runValidation(repositoryPath, release) {
  const commands = [
    ['npm', ['ci']],
    ['npm', ['test', '--', '--progress=false']],
    ['npm', ['run', 'build:library']],
  ];

  for (const [command, args] of commands) {
    await run(command, args, { cwd: repositoryPath });
  }

  const automationRepository = resolveRepository();
  await run(
    process.execPath,
    [
      path.join(automationRepository, 'scripts', 'verify-public-api.mjs'),
      '--package-root',
      repositoryPath,
    ],
    { cwd: automationRepository },
  );
  for (const major of release.angularMajors) {
    await run(
      'npm',
      [
        'run',
        'verify:consumer',
        '--',
        major,
        '--package-root',
        repositoryPath,
      ],
      { cwd: automationRepository },
    );
  }
}

async function packRelease(repositoryPath) {
  const packDirectory = await mkdtemp(path.join(tmpdir(), 'ngx-mat-select-release-'));
  try {
    const result = await run(
      'npm',
      ['pack', `./dist/${PACKAGE_NAME}`, '--json', '--pack-destination', packDirectory],
      { cwd: repositoryPath },
    );
    const pack = JSON.parse(result.stdout);
    if (!Array.isArray(pack) || pack.length !== 1 || !pack[0].filename) {
      throw new ReleaseError('npm pack returned an unexpected result.');
    }
    return {
      directory: packDirectory,
      tarball: path.join(packDirectory, pack[0].filename),
      metadata: pack[0],
    };
  } catch (error) {
    await rm(packDirectory, { recursive: true, force: true });
    throw error;
  }
}

export async function validateRelease(version, repositoryPath = resolveRepository()) {
  const { release, npmUser } = await assertReleaseState(repositoryPath, version);
  await runValidation(repositoryPath, release);
  const packed = await packRelease(repositoryPath);
  try {
    return {
      package: PACKAGE_NAME,
      version,
      tag: release.tag,
      npmUser,
      filename: packed.metadata.filename,
      size: packed.metadata.size,
      unpackedSize: packed.metadata.unpackedSize,
      integrity: packed.metadata.integrity,
      readyToPublish: true,
      requiredConfirmation: confirmationPhrase(version),
    };
  } finally {
    await rm(packed.directory, { recursive: true, force: true });
  }
}

export async function publishRelease(
  version,
  confirmation,
  repositoryPath = resolveRepository(),
) {
  const expectedConfirmation = confirmationPhrase(version);
  if (confirmation !== expectedConfirmation) {
    throw new ReleaseError(`Confirmation must exactly match: ${expectedConfirmation}`);
  }

  const { release, npmUser } = await assertReleaseState(repositoryPath, version);
  await assertPrerequisite(repositoryPath, version, release);
  await runValidation(repositoryPath, release);
  const packed = await packRelease(repositoryPath);
  try {
    const result = await run(
      'npm',
      ['publish', packed.tarball, '--tag', release.tag, '--access', 'public'],
      { cwd: repositoryPath },
    );
    return {
      package: PACKAGE_NAME,
      version,
      tag: release.tag,
      npmUser,
      published: true,
      registryOutput: result.stdout,
    };
  } finally {
    await rm(packed.directory, { recursive: true, force: true });
  }
}
