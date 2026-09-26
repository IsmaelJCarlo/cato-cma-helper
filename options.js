const form = document.querySelector("#settings-form");
const urlInput = document.querySelector("#console-url");
const enabledInput = document.querySelector("#enabled");
const status = document.querySelector("#status");

function parseConsoleUrl(value) {
  let url;

  try {
    url = new URL(value.trim());
  } catch {
    throw new Error("Enter a valid HTTPS URL.");
  }

  if (url.protocol !== "https:") {
    throw new Error("The console URL must use HTTPS.");
  }

  if (!url.hostname.endsWith(".catonetworks.com")) {
    throw new Error("Enter a Cato Networks console URL.");
  }

  return {
    consoleUrl: `${url.origin}/`,
    matchPattern: `${url.origin}/*`,
  };
}

function showStatus(message, isError = false) {
  status.textContent = message;
  status.classList.toggle("error", isError);
}

async function loadSettings() {
  const settings = await chrome.storage.sync.get({
    consoleUrl: "",
    enabled: true,
  });

  urlInput.value = settings.consoleUrl;
  enabledInput.checked = settings.enabled;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  showStatus("");

  try {
    const { consoleUrl, matchPattern } = parseConsoleUrl(urlInput.value);
    const previous = await chrome.storage.sync.get({ matchPattern: "" });
    const granted = await chrome.permissions.request({
      origins: [matchPattern],
    });

    if (!granted) {
      throw new Error("Site access was not granted.");
    }

    await chrome.storage.sync.set({
      consoleUrl,
      matchPattern,
      enabled: enabledInput.checked,
    });

    const response = await chrome.runtime.sendMessage({
      type: "sync-content-script",
    });

    if (!response?.ok) {
      throw new Error(response?.error || "Could not activate the extension.");
    }

    if (previous.matchPattern && previous.matchPattern !== matchPattern) {
      await chrome.permissions.remove({ origins: [previous.matchPattern] });
    }

    urlInput.value = consoleUrl;
    showStatus(
      enabledInput.checked
        ? "Saved. Reload an open Cato tab once to activate it."
        : "Saved. Automatic dismissal is currently disabled.",
    );
  } catch (error) {
    showStatus(error.message, true);
  }
});

loadSettings().catch((error) => showStatus(error.message, true));
