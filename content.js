fetch('https://raw.githubusercontent.com/Web3Shield55/web3-shield-data/main/scamlist.json')
  .then(response => response.json())
  .then(data => {
    const scamDomains = data.scamDomains; // ✅ grab the array correctly
    const hostname = window.location.hostname;

    if (scamDomains.includes(hostname)) {
      const warningBanner = document.createElement('div');
      warningBanner.textContent = "⚠️ Warning: This site is flagged as a Web3 scam!";
      warningBanner.style.position = "fixed";
      warningBanner.style.top = "0";
      warningBanner.style.left = "0";
      warningBanner.style.right = "0";
      warningBanner.style.backgroundColor = "red";
      warningBanner.style.color = "white";
      warningBanner.style.fontSize = "16px";
      warningBanner.style.fontWeight = "bold";
      warningBanner.style.textAlign = "center";
      warningBanner.style.padding = "10px";
      warningBanner.style.zIndex = "9999";
      document.body.prepend(warningBanner);
    }
  })
  .catch(error => {
    console.error("Web3 Shield: Failed to fetch scam list.", error);
  });
