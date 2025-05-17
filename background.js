chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getScamList") {
    fetch(chrome.runtime.getURL("scamlist.json"))
      .then((res) => res.json())
      .then((data) => sendResponse({ scamDomains: data.scamDomains }))
      .catch(() => sendResponse({ scamDomains: [] }));
    return true; // keep the message channel open for async response
  }
});
