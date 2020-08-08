$(function () {
  let lastYPos = 0;

  const nav = $("nav.navbar");

  window.addEventListener("scroll", () => {
    const yPos = window.scrollY;

    if (yPos > 35.1 && yPos > lastYPos) {
      nav.addClass("hide");
    } else {
      nav.removeClass("hide");
    }

    lastYPos = yPos;
  });
});

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

const navLink = document.querySelectorAll(".nav-link");
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    if (menuOpen) {
      menuBtn.click();
    }
  });
}
