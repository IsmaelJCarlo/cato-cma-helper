# Microsoft Edge Add-ons submission copy

This file contains copy-ready answers for Partner Center. Review them before
each submission so they remain accurate.

## Category

Productivity

## Short description

Quality-of-life improvements for Cato CMA, beginning with automatic dismissal
of repetitive page-help captions.

## Description

Cato CMA Helper provides focused quality-of-life improvements for the Cato
Management Application. Its first feature removes repetitive “How it works”
page-help captions so administrators can get directly to the console content
they use. Enter your organization's Cato console URL once, grant access to that
exact origin, and the extension dismisses matching page-help panels as they
appear—including after navigation within the single-page application. The
extension runs entirely in the browser, makes no network requests, includes no
remote code, and collects no page content, credentials, analytics, or telemetry.
Automatic dismissal can be disabled from the extension settings at any time.

This independent utility is not affiliated with or endorsed by Cato Networks.

## Search terms

Cato, CMA, console, help caption, productivity, administrator

## Single purpose

Automatically dismiss Cato Management Application page-help captions on the
specific Cato console origin configured by the user.

## Permission justifications

### storage

Stores the configured Cato console origin and the user's enabled/disabled
preference in browser-synchronized extension storage.

### scripting

Registers the bundled content script on the user-approved Cato console origin
so the extension can detect and dismiss matching page-help captions, including
captions rendered after in-app navigation.

### Optional host permission

The manifest allows the user to choose a Cato Networks HTTPS origin, but the
extension requests access only to the exact origin the user enters. This access
is required to locate and click Cato's page-help Dismiss button.

## Remote code

No. All executable code is included in the submitted Manifest V3 package.

## Data usage

Select **Website content**. The extension locally examines content on the
user-approved Cato console origin only to identify and dismiss matching
page-help captions. It does not retain or transmit that content, makes no
outbound network requests, and does not transmit, sell, or share user data. The
configured origin and enabled preference are the only stored values and are not
accessible to the developer.

## Privacy policy URL

https://github.com/IsmaelJCarlo/cato-cma-helper/blob/main/PRIVACY.md

## Website URL

https://github.com/IsmaelJCarlo/cato-cma-helper

## Support URL

https://github.com/IsmaelJCarlo/cato-cma-helper/issues

## Certification notes

1. Install the extension and open its settings page.
2. Enter an HTTPS Cato Management Application URL ending in
   `.catonetworks.com` and select **Save settings**.
3. Approve access to that exact origin.
4. Open or reload the configured Cato console.
5. Navigate to a page that displays Cato's Page Info / “How it works” panel.
6. The extension automatically activates the panel's Dismiss button.

No account credentials are bundled with the extension. A Cato CMA test account
is required to observe the site-specific behavior. The options page, permission
request, enabled state, and absence of network requests can be reviewed without
an account.

## Store assets

- Logo: `store-assets/store-logo-300.png` (300 × 300 PNG)
- Source logo: `store-assets/logo-source.png`
- Screenshot: `assets/screenshots/cato-cma-helper-settings-1280x800.png`
  (1280 × 800 PNG; uses a placeholder console URL and contains no tenant data)

Partner Center also requests screenshots. Capture screenshots only from a test
tenant or a carefully redacted page; do not upload images containing customer,
user, event, IP-address, or account data.
