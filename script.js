// burger

const toggleNav = () => {
  if (!menuOpen) {
    Burgermenu.classList.add("open");
    menuOpen = true;
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
    Burgermenu.classList.remove("open");
    menuOpen = false;
  }
};

let Burgermenu = document.querySelector(".menu-btn");

let menuOpen = false;
const nav = document.querySelector("nav-list");

Burgermenu.addEventListener("click", () => {
  toggleNav();
});

nav.addEventListener("click", () => {
  toggleNav();
});

// accordion
let accordion = document.querySelectorAll(".acordion-box");

for (let item of accordion) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
