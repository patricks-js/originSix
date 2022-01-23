// Toggle Menu
const navigation = document.getElementById("navigation");
const toggle = document
  .querySelectorAll("#navigation .toggle")
  .forEach((el) => {
    el.addEventListener("click", () => {
      navigation.classList.toggle("show");
    });
  });

// Fechar menu ao clicar

const link = document.querySelectorAll("nav ul li a").forEach((el) => {
  el.addEventListener("click", () => {
    navigation.classList.remove("show");
  });
});

// Sombra no meu header

let header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// Carrousel swiper
const swiper = new Swiper(".swiper", {
  slidePerView: 1,
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// ScrollReveal

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
#home .image, #home .text, 
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials, 
#contact .text, #contact .links
`,
  { interval: 100 }
);
