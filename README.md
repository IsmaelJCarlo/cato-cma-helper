# Cato CMA Helper

A small, extensible Manifest V3 utility for Chrome and Microsoft Edge that adds
quality-of-life improvements to the Cato Management Application. Its first
feature automatically closes repetitive page-help captions such as the “How it
works” panel.

The extension is not affiliated with or endorsed by Cato Networks. “Cato
Networks” and related marks belong to their respective owners.

The extension targets the semantic markup observed in Cato CMA:

- a `button` with `aria-label="Dismiss"`
- Cato’s `Close` icon inside that button
- Cato’s surrounding `PageInfo` section (with “How it works” as a fallback)

This avoids depending on generated CSS class names and avoids closing unrelated
notifications or dialogs.

## Install from Microsoft Edge Add-ons

The public store listing is not live yet. Until Microsoft completes
certification, use the unpacked development installation below.

## Install for development in Microsoft Edge

1. Open `edge://extensions`.
2. Turn on **Developer mode**.
3. Select **Load unpacked**.
4. Choose this project folder.
5. On the settings page, enter the exact Cato console URL and select
   **Save and enable**.
6. Reload any Cato tabs that were already open.

## Install for development in Google Chrome

1. Open `chrome://extensions`.
2. Turn on **Developer mode**.
3. Select **Load unpacked**.
4. Choose this project folder.
5. On the settings page, enter the exact Cato console URL and select
   **Save and enable**.
6. Reload any Cato tabs that were already open.

## Privacy and permissions

The options page requests access only to the exact Cato console origin entered
by the user. The extension does not make network requests or collect page data,
credentials, or analytics. Configuration is stored using browser-synced
extension storage.

See the full [privacy policy](PRIVACY.md).

## Public releases

Every version tag matching `v*` creates a GitHub Release and attaches a ZIP
ready for Microsoft Edge Add-ons submission:

```powershell
git tag v1.0.0
git push origin v1.0.0
```

The release workflow validates the source before packaging it. The store-only
logo and submission copy are kept in `store-assets/` and
`STORE_SUBMISSION.md`; they are not included in the runtime package.

## Development checks

Run:

```powershell
npm test
```

No build step is required. After changing a file, use **Reload** on the browser’s
extensions page and refresh the Cato tab. See [CONTRIBUTING.md](CONTRIBUTING.md)
for the release checklist.
