let menuOpen = false;

let lastYPos = 0;
const nav = document.querySelector("nav.navbar");
window.addEventListener("scroll", () => {
  const yPos = window.scrollY;

  if (yPos > 35.1 && yPos > lastYPos) {
    nav.classList.add("hide");
    if (menuOpen) {
      closeMenu();
    }
  } else {
    nav.classList.remove("hide");
  }

  lastYPos = yPos;
});

const menuBtn = document.querySelector(".menu-btn");
const collapse = document.querySelector(".collapse");

const closeMenu = () => {
  menuBtn.classList.remove("open");
  collapse.classList.remove("show");
  menuOpen = false;
};

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    collapse.classList.add("show");
    menuOpen = true;
  } else {
    closeMenu();
  }
});

const navLink = document.querySelectorAll(".nav-link");
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    if (menuOpen) {
      closeMenu();
    }
  });
}

const words = ["A Student.", "Full stack Developer."];

let cursor = gsap.to(".js-cursor", {
  opacity: 0,
  ease: "power2.inOut",
  repeat: -1,
});
let masterTl = gsap.timeline({ repeat: -1 }).pause();
let boxTl = gsap.timeline();

boxTl
  .to(".box", { duration: 1, width: "17vw", delay: 0.3, ease: "power4.inOut" })
  .from(".hi", { duration: 1, y: "7vw", ease: "power3.out" })
  .to(".box", {
    duration: 1,
    height: "7vw",
    ease: "elastic.out",
    onComplete: () => masterTl.play(),
  })
  .to(".box", {
    duration: 2,
    autoAlpha: 0.7,
    yoyo: true,
    repeat: -1,
    ease:
      "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
  });
words.forEach((word) => {
  let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
  tl.to(".js-text", { duration: 1, text: word });
  masterTl.add(tl);
});
