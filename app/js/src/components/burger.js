const menu = document.querySelector(".burger-menu");
const menuBtn = document.querySelector(".burger-btn");

document.addEventListener("click", handleClick);

function handleClick(e) {
  console.log(e.target)
  if (e.target.closest(".burger-btn")) {
    menu.classList.toggle("active");
    document.body.classList.toggle("scroll-lock");
  } else {
    menu.classList.remove("active");
    document.body.classList.remove("scroll-lock");
  }

}