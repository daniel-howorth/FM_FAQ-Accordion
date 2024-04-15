const icons = document.querySelectorAll(".icon");
const plusIconSrc = "assets/images/icon-plus.svg";
const minusIconSrc = "assets/images/icon-minus.svg";

function toggleAnswer() {
  const targetAnswer = document.querySelector(`#${this.dataset.question}`);
  targetAnswer.classList.toggle("hidden");
  const currentIcon = this.getAttribute("src");
  currentIcon === plusIconSrc
    ? this.setAttribute("src", minusIconSrc)
    : this.setAttribute("src", plusIconSrc);
}

icons.forEach((icon) => icon.addEventListener("click", toggleAnswer));
