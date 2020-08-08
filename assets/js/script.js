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
