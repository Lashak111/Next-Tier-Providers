let accordion = document.querySelectorAll(".acordion-box");

for (let item of accordion) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
