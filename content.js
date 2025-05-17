fetch(chrome.runtime.getURL("scamlist.json"))
  .then(response => response.json())
  .then(data => {
    const currentDomain = window.location.hostname;
    if (data.scamDomains.includes(currentDomain)) {
      const warningBanner = document.createElement('div');
      warningBanner.style.position = 'fixed';
      warningBanner.style.top = '0';
      warningBanner.style.left = '0';
      warningBanner.style.right = '0';
      warningBanner.style.backgroundColor = 'red';
      warningBanner.style.color = 'white';
      warningBanner.style.textAlign = 'center';
      warningBanner.style.padding = '10px';
      warningBanner.style.zIndex = '9999';
      warningBanner.innerText = '⚠️ Warning: This site is flagged as a known scam by Web3 Shield.';
      document.body.appendChild(warningBanner);
    }
  });