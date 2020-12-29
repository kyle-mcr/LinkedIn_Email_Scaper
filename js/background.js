window.chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    if (changeInfo.url.includes('://www.linkedin.com/in/')) {
      window.chrome.tabs.executeScript({ file: "js/content.js" });
    } else {
      window.chrome.pageAction.hide(tabId);
    }
  }
});

// After a LinkedIn profile page has been loaded, this event is fired to activate the popup in that tab
window.chrome.extension.onMessage.addListener((req, sender, sendResponse) => {
  if (req.message === "activate_icon") {
    window.chrome.pageAction.show(sender.tab.id);
  };
});