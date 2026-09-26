# Google Chrome Web Store submission copy

This file records copy-ready answers for the Chrome Web Store. Review the live
dashboard and current policies before every submission because Google may
change its fields or requirements.

## Package

- Release: `v1.0.1`
- ZIP: `dist/cato-cma-helper-v1.0.1.zip`
- Manifest version: 3
- Default language: English (United States)

## Product details

### Name

Cato CMA Helper

### Summary

Quality-of-life improvements for Cato CMA, including automatic dismissal of
repetitive page-help captions.

### Detailed description

Cato CMA Helper provides focused quality-of-life improvements for the Cato
Management Application. Its first feature removes repetitive "How it works"
page-help captions so administrators can get directly to the console content
they use.

Enter your organization's Cato console URL once and grant access to that exact
origin. The extension then dismisses matching page-help panels as they appear,
including after navigation within the single-page application.

Key features:

- Configurable for each organization's Cato CMA console URL.
- Requests access only to the exact Cato origin entered by the user.
- Automatically dismisses matching page-help captions.
- Can be enabled or disabled at any time from extension settings.
- Runs entirely in the browser with no developer-operated server, analytics,
  telemetry, advertising, or remote code.

The extension locally examines content on the approved Cato console only to
identify and dismiss matching help captions. It does not retain or transmit
page content. The configured origin and enabled preference are stored through
browser-synchronized extension storage and are not accessible to the developer.

This independent utility is not affiliated with or endorsed by Cato Networks.

### Category

Productivity

### Language

English (United States)

### Official URL / website

https://github.com/IsmaelJCarlo/cato-cma-helper

### Support URL

https://github.com/IsmaelJCarlo/cato-cma-helper/issues

## Privacy practices

### Single purpose

Automatically dismiss Cato Management Application page-help captions on the
specific Cato console origin configured and approved by the user.

### `storage` justification

Stores the configured Cato console origin and the user's enabled or disabled
preference in browser-synchronized extension storage. These values are not
accessible to the developer.

### `scripting` justification

Registers the bundled content script on the user-approved Cato console origin
so the extension can detect and dismiss matching page-help captions, including
captions rendered after in-app navigation.

### Host permission justification

The manifest permits selection of a Cato Networks HTTPS origin, but the
extension requests access only to the exact origin entered by the user. Host
access is required to locate and activate the page-help panel's Dismiss button.

### Remote code

Select **No, I am not using remote code**. All executable JavaScript is bundled
inside the submitted Manifest V3 package. The extension does not use `eval`,
remotely hosted scripts, or remotely hosted WebAssembly.

### Data handled

Select **Website content**. The extension locally examines website content on
the user-approved Cato console only to locate matching page-help captions. The
content is processed transiently, is not retained, and is never transmitted to
the developer or a third party.

Do not select personally identifiable information, health information,
financial information, authentication information, personal communications,
location, or web history based on version 1.0.1's behavior.

### Limited-use certifications

Certify that:

- data is not sold or transferred to third parties outside approved use cases;
- data is not used or transferred for purposes unrelated to the extension's
  single purpose; and
- data is not used or transferred to determine creditworthiness or for lending.

### Privacy policy URL

https://github.com/IsmaelJCarlo/cato-cma-helper/blob/main/PRIVACY.md

## Distribution

- Visibility: Public
- Regions: All regions
- Pricing: Free

## Test instructions for reviewers

1. Install the extension and open its settings page.
2. Enter an HTTPS Cato Management Application URL ending in
   `.catonetworks.com`, then select **Save settings**.
3. Approve access to that exact origin when Chrome prompts.
4. Open or reload the configured Cato console.
5. Navigate to a page displaying Cato's Page Info / "How it works" panel.
6. Verify that the extension automatically activates the panel's Dismiss
   button.
7. Disable automatic dismissal in settings and verify that the extension no
   longer dismisses the panel.

No credentials are bundled with the extension. A Cato CMA test account is
required to observe the site-specific behavior. The settings UI, optional host
permission flow, enabled state, and absence of outbound network requests can be
reviewed without an account.

## Graphic assets

- Store icon: `assets/icons/icon-128.png` (128 x 128 PNG)
- Alternate high-resolution logo: `store-assets/store-logo-300.png`
- Screenshots: at least one is required; use 1280 x 800 or 640 x 400 PNG/JPEG.
- Small promotional tile: 440 x 280 PNG/JPEG if requested by the dashboard.
- Marquee promotional image: 1400 x 560 PNG/JPEG; optional under Google's
  current listing guidance.

Capture screenshots only from a test tenant or a carefully redacted page. Do
not upload images containing customer names, usernames, events, IP addresses,
account identifiers, or other tenant data.

## Pre-submission checks

- Run `npm test`.
- Confirm the ZIP contains `manifest.json` at its root.
- Confirm the submitted version is greater than any previously uploaded Chrome
  Web Store version.
- Confirm the listing, privacy policy, and dashboard disclosures describe the
  same data handling.
- Verify all URLs are public without authentication.
- Test the exact ZIP that will be submitted.

## Official Google references

- Publishing: https://developer.chrome.com/docs/webstore/publish/
- Store listing fields: https://developer.chrome.com/docs/webstore/cws-dashboard-listing
- Privacy fields: https://developer.chrome.com/docs/webstore/cws-dashboard-privacy
- User Data FAQ: https://developer.chrome.com/docs/webstore/program-policies/user-data-faq
- Listing guidance and image sizes: https://developer.chrome.com/docs/webstore/best-listing
