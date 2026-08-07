const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".header-links");

if (hamburger && headerLinks) {
  hamburger.addEventListener("click", () => {
    const menuOpen = headerLinks.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", String(menuOpen));
  });

  headerLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      headerLinks.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}
