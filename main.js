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

// Sombra no meu header e seta de voltar para o topo
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

const shadowOnHeader = () => {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
};

const buttonArrow = document.querySelector(".back-to-top");

const showButtonToTop = () => {
  if (window.scrollY >= 600) {
    buttonArrow.classList.add("show");
  } else {
    buttonArrow.classList.remove("show");
  }
};

const sections = document.querySelectorAll("main section[id]");
const activateLink = () => {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  sections.forEach(el => {
      const sectionTop = el.offsetTop
      const sectionHeight = el.offsetHeight
      const sectionId = el.getAttribute('id')

      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
        document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.add('active')
    } else {
        document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.remove('active')

    }

  })
};

// call functions

window.addEventListener("scroll", () => {
  shadowOnHeader();
  showButtonToTop();
  activateLink();
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
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
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
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 90 }
);
