const getNavigationState = (headerLinks, hamburger) => {
  const menuOpen = headerLinks.classList.toggle("is-open");
  hamburger.setAttribute("aria-expanded", String(menuOpen));
  return menuOpen;
};

export function initNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const headerLinks = document.querySelector(".header-links");

  if (!(hamburger instanceof HTMLButtonElement) || !(headerLinks instanceof HTMLUListElement)) {
    return;
  }

  const mobileNavigation = window.matchMedia("(max-width: 768px)");

  const closeNavigation = () => {
    headerLinks.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
  };

  hamburger.addEventListener("click", () => {
    getNavigationState(headerLinks, hamburger);
  });

  headerLinks.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && headerLinks.classList.contains("is-open")) {
      closeNavigation();
      hamburger.focus();
    }
  });

  mobileNavigation.addEventListener("change", (event) => {
    if (!event.matches) {
      closeNavigation();
    }
  });
}
