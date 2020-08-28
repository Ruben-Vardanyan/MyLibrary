const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-menu");
  const navLinks = document.querySelectorAll(".nav-links .menuLink");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
        link.classList.add("menuLink_1");

      }
    });
    burger.classList.toggle("toggle");
    burger.classList.toggle("phoneMin");
  });
  //
};

navSlide();
