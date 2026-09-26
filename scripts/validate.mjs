import { existsSync, readFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
const requiredFiles = [
  "background.js",
  "content.js",
  "options.html",
  "options.js",
  "popup.html",
  "popup.js",
  "styles.css",
  ...Object.values(manifest.icons || {}),
];

if (manifest.manifest_version !== 3) {
  throw new Error("The extension must use Manifest V3.");
}

if (!manifest.optional_host_permissions?.includes("https://*.catonetworks.com/*")) {
  throw new Error("The optional Cato host permission is missing.");
}

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    throw new Error(`Missing packaged file: ${file}`);
  }
}

const optionsHtml = readFileSync("options.html", "utf8");
const optionsJs = readFileSync("options.js", "utf8");

if (/id="console-url"[^>]+value=/i.test(optionsHtml)) {
  throw new Error("The public options page must not ship with a tenant URL.");
}

if (!/consoleUrl:\s*""/.test(optionsJs)) {
  throw new Error("The default console URL must be empty.");
}

console.log("Manifest and public-package checks passed.");
