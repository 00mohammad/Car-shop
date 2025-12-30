const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  if (menuOpen == false) {
    navLinks.style.display = "Block";
    menuOpen = true;
  } else if (menuOpen == true) {
    navLinks.style.display = "None";
    menuOpen = false;
  }
});
