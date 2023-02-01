const switchInput = document.querySelector(".switch");
const price = document.querySelectorAll(".price");

switchInput.addEventListener("change", () => {
  price.forEach((plan) => {
    plan.classList.toggle("show");
  });
});
