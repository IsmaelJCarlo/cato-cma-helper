(() => {
  const DISMISS_SELECTOR = 'button[aria-label="Dismiss"]';
  const dismissedButtons = new WeakSet();
  let scanQueued = false;
  let enabled = true;

  function normalizedText(element) {
    return (element?.textContent || "").replace(/\s+/g, " ").trim();
  }

  function isCatoPageHelpButton(button) {
    if (!(button instanceof HTMLButtonElement) || dismissedButtons.has(button)) {
      return false;
    }

    const closeIcon = button.querySelector(
      'svg[data-icon-name="Close"], svg[name="Close"]',
    );
    const helpSection = button.closest("section");
    const sectionText = normalizedText(helpSection).toLowerCase();
    const sectionStyle = helpSection?.getAttribute("style") || "";
    const isPageInfoSection =
      sectionStyle.includes("PageInfo") || sectionText.includes("how it works");

    return Boolean(
      closeIcon &&
        helpSection &&
        isPageInfoSection,
    );
  }

  function dismissHelpCaptions() {
    scanQueued = false;

    if (!enabled) {
      return;
    }

    for (const button of document.querySelectorAll(DISMISS_SELECTOR)) {
      if (!isCatoPageHelpButton(button)) {
        continue;
      }

      dismissedButtons.add(button);
      button.click();
    }
  }

  function queueScan() {
    if (scanQueued) {
      return;
    }

    scanQueued = true;
    queueMicrotask(dismissHelpCaptions);
  }

  chrome.storage.sync.get({ enabled: true }, (settings) => {
    enabled = settings.enabled;
    queueScan();
  });

  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "sync" && changes.enabled) {
      enabled = changes.enabled.newValue;
      queueScan();
    }
  });

  const observer = new MutationObserver(queueScan);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  queueScan();
})();
