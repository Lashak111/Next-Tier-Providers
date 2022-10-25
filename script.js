// accordion
let accordion = document.querySelectorAll(".acordion-box");

for (let item of accordion) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

let scroll = document.getElementById("Scrooltop");

scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
