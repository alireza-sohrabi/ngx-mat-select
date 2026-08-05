# ngx-mat-select npm publisher MCP server

This project-specific STDIO server exposes guarded release tools for `ngx-mat-select`:

- `npm_release_status` checks the repository, registry, and npm authentication.
- `npm_validate_release` runs the complete release validation and packs the artifact without publishing.
- `npm_publish_release` repeats validation and publishes only after receiving an exact confirmation phrase.

The server permits only this release sequence:

1. `21.0.0-next.0` with the `next` dist-tag.
2. `21.0.0` with the `latest` dist-tag, after the prerelease exists on npm.

Angular 17–20 versions were migration checkpoints and cannot be published through this server.

## Install

```bash
cd tools/npm-publisher-mcp
npm ci
```

Add the server to `~/.codex/config.toml`:

```toml
[mcp_servers.ngx_mat_select_npm]
command = "node"
args = ["D:\\ngx-mat-select\\tools\\npm-publisher-mcp\\src\\index.mjs"]
env_vars = ["NPM_TOKEN"]
tool_timeout_sec = 1800
default_tools_approval_mode = "writes"

[mcp_servers.ngx_mat_select_npm.env]
NGX_MAT_SELECT_REPO = "D:\\ngx-mat-select"
```

Restart Codex after changing the MCP configuration.

## Authentication

Use a granular npm access token that can publish `ngx-mat-select`. Keep it outside the repository and expose it as `NPM_TOKEN` before starting Codex. The server writes the token to a temporary npm user configuration for each npm command and removes it immediately afterward. An existing user-level npm login is also supported when `NPM_TOKEN` is unset.

Do not put a token in this README, `config.toml`, or any repository file.

## Release requirements

Before validation or publishing:

- both `package.json` files must contain the requested release version;
- the current branch must be `master`;
- the working tree must be clean;
- the version must not already exist on npm;
- npm authentication must succeed;
- for `21.0.0`, `21.0.0-next.0` must already exist on npm.

The server runs installation, unit tests, public API validation, Angular 21 and 22 consumer validation, a production library build, and `npm pack` before publishing.
