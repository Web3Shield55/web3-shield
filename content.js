chrome.runtime.sendMessage({ action: "getScamList" }, (response) => {
  const scamDomains = response.scamDomains || [];
  const currentDomain = window.location.hostname;

  if (scamDomains.includes(currentDomain)) {
    const warningBanner = document.createElement("div");
    warningBanner.style.position = "fixed";
    warningBanner.style.top = "0";
    warningBanner.style.left = "0";
    warningBanner.style.right = "0";
    warningBanner.style.backgroundColor = "red";
    warningBanner.style.color = "white";
    warningBanner.style.textAlign = "center";
    warningBanner.style.padding = "10px";
    warningBanner.style.zIndex = "9999";
    warningBanner.innerText = "WARNING: This site is flagged as a known scam by Web3 Shield.";
    document.body.appendChild(warningBanner);
  }
});
