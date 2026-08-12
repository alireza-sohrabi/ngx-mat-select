# Contributing to ngx-mat-select

Thank you for improving `ngx-mat-select`. Bug reports, documentation corrections, accessibility findings, tests, and focused pull requests are welcome.

## Before opening an issue

- Search [existing issues](https://github.com/alireza-sohrabi/ngx-mat-select/issues).
- Confirm the problem with a supported Angular and `ngx-mat-select` version.
- Create a minimal reproduction in StackBlitz or a small repository when possible.
- Use GitHub Security Advisories rather than a public issue for vulnerabilities.

## Local development

Requirements: Node.js 22 and npm 11.

```bash
npm ci
npm start
```

The documentation application runs at `http://localhost:4200`.

## Validate a change

Run the checks that apply to your change before opening a pull request:

```bash
npm test
npm run build:ci
npm run verify:public-api
npm run verify:consumer
```

Changes to keyboard behavior or visual states should include tests. UI changes should be checked in light and dark themes, narrow and wide viewports, keyboard-only navigation, and both LTR and RTL direction.

## Pull requests

1. Fork the repository and create a focused branch.
2. Keep unrelated refactors out of the pull request.
3. Add or update tests and documentation.
4. Use a clear title and explain the user-visible effect.
5. Note breaking changes explicitly. Breaking public API changes require a new major release.

The project uses TypeScript, Angular templates, and SCSS with two-space indentation. Follow the existing formatter and naming conventions.

By participating, you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).
