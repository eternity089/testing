document.addEventListener("DOMContentLoaded", function () {
  const buttonUp = document.getElementById("button-up");


  buttonUp.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});