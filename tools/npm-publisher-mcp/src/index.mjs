import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { pathToFileURL } from 'node:url';
import { z } from 'zod';
import {
  confirmationPhrase,
  getStatus,
  publishRelease,
  resolveReleaseRepository,
  resolveRepository,
  validateRelease,
} from './release.mjs';

const releaseVersionSchema = z.enum([
  '17.0.0',
  '18.0.0',
  '19.0.0',
  '20.0.0',
  '21.0.0-next.0',
  '21.0.0',
]);

function result(value) {
  return {
    content: [{ type: 'text', text: JSON.stringify(value, null, 2) }],
    structuredContent: value,
  };
}

function failure(error) {
  const value = {
    error: error.message,
    details: error.details,
  };
  return {
    isError: true,
    content: [{ type: 'text', text: JSON.stringify(value, null, 2) }],
  };
}

function guarded(handler) {
  return async (args) => {
    try {
      return result(await handler(args));
    } catch (error) {
      return failure(error);
    }
  };
}

export function createServer() {
  const server = new McpServer(
    { name: 'ngx-mat-select-publisher', version: '1.0.0' },
    {
      instructions:
        'This server only releases ngx-mat-select. Publish 17.0.0 through 20.0.0 from their matching release worktrees with angular-major tags, then publish 21.0.0-next.0 with next, and only later 21.0.0 with latest. Always call npm_release_status first, then npm_validate_release, and ask the user for the exact release-specific confirmation phrase before every npm_publish_release call.',
    },
  );

  server.registerTool(
    'npm_release_status',
    {
      title: 'Check ngx-mat-select release status',
      description:
        'Inspect the local branch, working tree, package versions, npm registry version, and npm authentication without publishing.',
      inputSchema: {},
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    guarded(async () => getStatus(resolveRepository())),
  );

  server.registerTool(
    'npm_validate_release',
    {
      title: 'Validate an ngx-mat-select release',
      description:
        'Require the clean version-specific release branch and matching unpublished package version, run the full test and consumer validation suite, and inspect the packed artifact without publishing it.',
      inputSchema: { version: releaseVersionSchema },
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    guarded(async ({ version }) => validateRelease(
      version,
      resolveReleaseRepository(version, resolveRepository()),
    )),
  );

  server.registerTool(
    'npm_publish_release',
    {
      title: 'Publish an ngx-mat-select release',
      description:
        'Run all release checks and publish one permitted release with its fixed dist-tag. Requires the exact release-specific confirmation phrase.',
      inputSchema: {
        version: releaseVersionSchema,
        confirmation: z.string().describe(
          'Exact phrase returned by npm_release_status, such as "publish ngx-mat-select@21.0.0-next.0 with tag next".',
        ),
      },
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    guarded(async ({ version, confirmation }) => {
      if (confirmation !== confirmationPhrase(version)) {
        throw new Error(`Confirmation must exactly match: ${confirmationPhrase(version)}`);
      }
      return publishRelease(
        version,
        confirmation,
        resolveReleaseRepository(version, resolveRepository()),
      );
    }),
  );

  return server;
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
