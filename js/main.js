// ONSCROLL START
const header__container = document.querySelector(".header__container");
window.addEventListener("scroll", header);

function header() {
  if (window.scrollY > header__container.offsetHeight + 1) {
    header__container.classList.add("active");
  } else {
    header__container.classList.remove("active");
  }
}
