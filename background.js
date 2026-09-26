const CONTENT_SCRIPT_ID = "cato-help-caption-dismisser";

async function unregisterContentScript() {
  const registrations = await chrome.scripting.getRegisteredContentScripts({
    ids: [CONTENT_SCRIPT_ID],
  });

  if (registrations.length > 0) {
    await chrome.scripting.unregisterContentScripts({ ids: [CONTENT_SCRIPT_ID] });
  }
}

async function syncContentScript() {
  await unregisterContentScript();

  const { enabled = true, matchPattern } = await chrome.storage.sync.get({
    enabled: true,
    matchPattern: "",
  });

  if (!enabled || !matchPattern) {
    return;
  }

  const hasPermission = await chrome.permissions.contains({
    origins: [matchPattern],
  });

  if (!hasPermission) {
    return;
  }

  await chrome.scripting.registerContentScripts([
    {
      id: CONTENT_SCRIPT_ID,
      matches: [matchPattern],
      js: ["content.js"],
      runAt: "document_idle",
      persistAcrossSessions: true,
    },
  ]);
}

chrome.runtime.onInstalled.addListener(async ({ reason }) => {
  await syncContentScript();

  if (reason === "install") {
    await chrome.runtime.openOptionsPage();
  }
});

chrome.runtime.onStartup.addListener(syncContentScript);

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type !== "sync-content-script") {
    return undefined;
  }

  syncContentScript()
    .then(() => sendResponse({ ok: true }))
    .catch((error) => sendResponse({ ok: false, error: error.message }));

  return true;
});
