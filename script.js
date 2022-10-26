// burger
// const toggleNav = () => {
//   if (!menuOpen) {
//     Burgermenu.classList.add("open");
//     menuOpen = true;

//     nav.classList.add("show");
//   } else {
//     nav.classList.remove("show");
//     Burgermenu.classList.remove("open");
//     menuOpen = false;
//   }
// };

// let Burgermenu = document.querySelector(".menu-btn");

// let menuOpen = false;
// const nav = document.getElementById("nav-items");

// Burgermenu.addEventListener("click", () => {
//   toggleNav();
// });

// nav.addEventListener("click", () => {
//   toggleNav();
// });




// accordion
let accordion = document.querySelectorAll(".acordion-box");

for (let item of accordion) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
// scroll
let scroll = document.getElementById("Scrooltop");

scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
