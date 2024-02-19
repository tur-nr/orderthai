(() => {
  "use strict";

  const prefersDarkMedia = "(prefers-color-scheme: dark)";
  const dark = "dark";
  const light = "light";

  const storeKey = "theme";
  const getStoredTheme = () => localStorage.getItem(storeKey);
  // window.setStoredTheme = (theme) => localStorage.setItem(storeKey, theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia(prefersDarkMedia).matches ? dark : light;
  };

  const setTheme = (theme, doc = document) => {
    const attr = "data-bs-theme";
    if (theme === "auto" && window.matchMedia(prefersDarkMedia).matches) {
      doc.documentElement.setAttribute(attr, dark);
    } else {
      doc.documentElement.setAttribute(attr, theme);
    }
  };

  setTheme(getPreferredTheme());

  window.matchMedia(prefersDarkMedia).addEventListener("change", () => {
    const storedTheme = getStoredTheme();
    if (storedTheme !== light && storedTheme !== dark) {
      setTheme(getPreferredTheme());
    }
  });

  // document.addEventListener("astro:before-swap", (ev) => {
  //   setTheme(getPreferredTheme(), ev.newDocument);
  // });
})();
