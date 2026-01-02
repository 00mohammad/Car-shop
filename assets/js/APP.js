const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".header-links");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  if (menuOpen == false) {
    headerLinks.style.display = "Block";
    menuOpen = true;
  } else if (menuOpen == true) {
    headerLinks.style.display = "None";
    menuOpen = false;
  }
});
