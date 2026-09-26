# Contributing

Contributions and compatibility reports are welcome.

## Development

1. Clone the repository.
2. Run `npm test`.
3. Load the repository root as an unpacked extension.
4. Configure a Cato console URL on the options page.
5. Reload the extension and the test tab after source changes.

Do not commit customer names, account identifiers, console URLs, event data,
screenshots of private consoles, credentials, or private signing keys.

## Release checklist

1. Update the version in `manifest.json` and `package.json`.
2. Run `npm test`.
3. Test the unpacked extension in both Edge and Chrome.
4. Commit and push the version change.
5. Create and push a matching tag, such as `v1.0.1`.
6. Download the generated ZIP from the GitHub Release.
7. Upload that ZIP to Partner Center and submit the update for certification.
