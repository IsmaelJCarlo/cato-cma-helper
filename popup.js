const summary = document.querySelector("#summary");
const settingsButton = document.querySelector("#settings");

chrome.storage.sync
  .get({ consoleUrl: "", enabled: true })
  .then(({ consoleUrl, enabled }) => {
    if (!consoleUrl) {
      summary.textContent = "Choose a Cato console to get started.";
      return;
    }

    const hostname = new URL(consoleUrl).hostname;
    summary.textContent = enabled
      ? `Active on ${hostname}. Page-help dismissal is enabled.`
      : `Configured for ${hostname}. Page-help dismissal is disabled.`;
  })
  .catch(() => {
    summary.textContent = "Open settings to check the configuration.";
  });

settingsButton.addEventListener("click", () => chrome.runtime.openOptionsPage());
