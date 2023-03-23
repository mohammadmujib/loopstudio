console.log("working");
const navLink = document.querySelector(".mobile-nav-link");
let isOpen = false;
document.querySelector("#btn-show").addEventListener("click", (e) => {
  navLink.classList.toggle("hidden");
  if (isOpen) {
    e.target.src = "images/icon-hamburger.svg";
    isOpen = false;
  } else {
    e.target.src = "images/icon-close.svg";
    isOpen = true;
  }
});
