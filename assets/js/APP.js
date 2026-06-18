const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".header-links");
let menuOpen = false;

hamburger?.addEventListener("click", () => {
  menuOpen = !menuOpen;
  headerLinks.style.display = menuOpen ? "flex" : "none";
});

