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
const nav = document.getElementById("nav-items");

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
// scroll
let scroll = document.getElementById("Scrooltop");

scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// slider


if (document.getElementById("slider--text")) {
  let slides = [
      "<h2>Business and IT are becoming inextricably interwoven. I don't think anybody can talk meaningfully about one without talking about the other. <small>Bill Gates</small> </h2>",
      "<h2>The technology you use impresses no one. The experience you create with IT is everything. <small>- Sean Gerety (UX Expert)</small></h2>",
      "<h2>Technology is best when IT brings people together. <small>Matthew Mullenweg (Founder & CEO - CBBQTT, Lead Developer of WordPress)</small></h2>",
      "<h2>Even a small amount of unplanned downtime can affect a company’s profitability and reputation. <small>― Ratmir Timashev (CEO of Veeam)</small></h2>",
      "<h2>In any complicated problem, you have to look at the details, and you have to dissect it and do some analysis<small> Andy Jassy (CEO of Amazon since 2021, Founder of AWS, Person of the year 2016 by Financial Times)</small> </h2>",

  ];

  let i = 0;

  const slider = () => {
      document.getElementById("slider--text").innerHTML = slides[i];
      document.getElementById("slider--text").classList.add('fade-in');

      (i < slides.length - 1) ? i++ : i = 0;
  };

  slider(); // Start slider immediately
  setInterval(slider, 8000); // Slide every 4 seconds
}



// section 6 
const boxes = document.querySelectorAll(".sec6-box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}






