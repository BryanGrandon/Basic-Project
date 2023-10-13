const d = document,
  n = navigator,
  ua = n.userAgent;

function userDeviceInfo(id: string): void {
  const $container = d.getElementById(id)!;

  const isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows();
    },
  };
  const isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };
  const isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini|OPR/i),
    edge: () => ua.match(/edge/i),
    any: function () {
      return (
        this.chrome() ||
        this.safari() ||
        this.firefox() ||
        this.opera() ||
        this.edge()
      );
    },
  };

  const $sectionInfo = d.createElement("section");
  $sectionInfo.classList.add("deviceInfo");

  $sectionInfo.innerHTML = `
  <ul>
    <li>Platform: <span>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</span></li>
    <li>Browser: <span> ${isBrowser.any()}</span></li>
  </ul>`;
  $container?.appendChild($sectionInfo);

  //   Exclusive Content
  const $sectionExclusive = d.createElement("section");
  $sectionExclusive.classList.add("exclusive");

  if (isBrowser.chrome()) {
    $sectionExclusive.innerHTML = `<p>Exclusive content for chrome</p>`;
    $container.appendChild($sectionExclusive);
  }

  // Redirect
  if (isDesktop.linux()) {
    window.location.href = "https://jonmircha.com";
  }
}

d.addEventListener("DOMContentLoaded", () => {
  userDeviceInfo("device-detection");
});
