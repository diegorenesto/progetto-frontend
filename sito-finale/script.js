// burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
});

// effetto scroll della navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const heroSection = document.querySelector("#hero");
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

  if (window.scrollY > heroBottom) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// side navigations
const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".side-nav-item");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-section") === current) {
      item.classList.add("active");
    }
  });
});

// click side navigation
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    const targetId = this.getAttribute("data-section");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// click indicatore scroll
document.querySelectorAll(".scroll-indicator").forEach((indicator) => {
  indicator.addEventListener("click", function () {
    const parentSection = this.closest(".section");
    const nextSection = parentSection.nextElementSibling;

    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

let isScrolling = false;

window.addEventListener("wheel", function (event) {
  if (isScrolling) return;

  const sections = Array.from(document.querySelectorAll(".section"));
  const currentScroll = window.scrollY;
  const viewportHeight = window.innerHeight;

  let targetSection;

  if (event.deltaY > 0) {
    // Scroll down
    targetSection = sections.find(
      (section) => section.offsetTop > currentScroll + 1
    );
  } else {
    // Scroll up
    targetSection = [...sections]
      .reverse()
      .find((section) => section.offsetTop < currentScroll - 1);
  }

  if (targetSection) {
    isScrolling = true;
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling = false;
    }, 1000); // Delay to prevent rapid scrolling
  }
});

// carosello
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');
const dotsNav = document.querySelector('.carousel-dots');

let currentSlide = 0;

// crea i pallini per ogni slide
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
  dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);

function updateDots(current) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');
}

function goToSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;
  updateDots(currentSlide);
}

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
});

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(currentSlide);
});

// funzione modal
const modalContainer = document.querySelector('.modal-container');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

const patriotiInfo = {
  mazzini: {
    title: 'Giuseppe Mazzini',
    content: `
            <h2 style="font-size: 3.6rem; margin-bottom: 2rem; color: white">Giuseppe Mazzini - L'Ideologo dell'Unità</h2>
            <img src="img/Giuseppe_Mazzini.jpg" alt="Giuseppe Mazzini" style="max-width: 300px; float: right; margin: 0 0 20px 20px;">
            <p class="timeline-year" style="font-size: 2.4rem; color: #e2b144;">1805-1872</p>
            <p class="content-text" style="font-size: 1.8rem; line-height: 1.6; margin-bottom: 2rem; color: white">Giuseppe Mazzini è stato un patriota, politico, filosofo e giornalista italiano. È stato una delle figure più influenti del Risorgimento italiano. Fondatore della Giovine Italia e della Giovine Europa, le sue idee e la sua azione politica contribuirono alla nascita dello Stato unitario italiano.</p>
            <p class="content-text" style="font-size: 1.8rem; line-height: 1.6; margin-bottom: 2rem; color: white">Il suo pensiero politico influenzò il movimento per l'indipendenza italiana, così come altri movimenti nazionali in Europa e nel mondo. Mazzini fu un sostenitore della repubblica democratica e del suffragio universale.</p>
            <blockquote class="quote" style="font-size: 2.2rem; color: #e2b144; margin: 3rem 0;">La vita è missione, e quindi il dovere è la sua legge suprema.</blockquote>
        `
  },
  cavour: {
    title: 'Camillo Benso Conte di Cavour',
    content: `
            <h2 style="font-size: 3.6rem; margin-bottom: 2rem; color: white">Camillo Benso Conte di Cavour - Il Diplomatico</h2>
            <img src="img/Camillo_Benso.jpeg" alt="Cavour" style="max-width: 300px; float: right; margin: 0 0 20px 20px;">
            <p class="timeline-year" style="font-size: 2.4rem; color: #e2b144;">1810-1861</p>
            <p class="content-text" style="font-size: 1.8rem; line-height: 1.6; margin-bottom: 2rem; color: white">Primo ministro del Regno di Sardegna e successivamente primo Presidente del Consiglio del Regno d'Italia. Fu il grande artefice dell'unificazione italiana attraverso la sua brillante attività diplomatica. La sua politica del "connubio" tra destra e sinistra storica e le alleanze internazionali posero le basi per l'unità nazionale.</p>
            <p class="content-text" style="font-size: 1.8rem; line-height: 1.6; margin-bottom: 2rem; color: white">Modernizzò il Regno di Sardegna attraverso importanti riforme economiche e sociali, trasformandolo in uno stato moderno capace di guidare il processo di unificazione. La sua abilità diplomatica fu cruciale nell'ottenere l'appoggio della Francia di Napoleone III.</p>
            <blockquote class="quote" style="font-size: 2.2rem; color: #e2b144; margin: 3rem 0;">L'Italia è fatta, ora bisogna fare gli italiani.</blockquote>
        `
  },
  garibaldi: {
    title: 'Giuseppe Garibaldi',
    content: `
            <h2 style="font-size: 3.6rem; margin-bottom: 2rem; color: white">Giuseppe Garibaldi - L'Eroe dei Due Mondi</h2>
            <img src="img/Giuseppe_Garibaldi.jpg" alt="Giuseppe Garibaldi" style="max-width: 300px; float: right; margin: 0 0 20px 20px;">
            <p class="timeline-year" style="font-size: 2.4rem; color: #e2b144;">1807-1882</p>
            <p class="content-text" style="font-size: 1.8rem; line-height: 1.6; margin-bottom: 2rem; color: white">Generale e condottiero italiano, fu una figura chiave del Risorgimento. Le sue imprese militari e il suo carisma lo resero un eroe popolare in Italia e all'estero. La Spedizione dei Mille, sua più celebre impresa, portò all'annessione del Regno delle Due Sicilie al nascente Regno d'Italia.</p>
            <p class="content-text" style="font-size: 1.8rem; line-height: 1.6; margin-bottom: 2rem; color: white">Combatté per la libertà non solo in Italia ma anche in Sud America, guadagnandosi l'appellativo di "Eroe dei Due Mondi". Il suo idealismo e il suo coraggio ispirarono movimenti di liberazione in tutto il mondo.</p>
            <blockquote class="quote" style="font-size: 2.2rem; color: #e2b144; margin: 3rem 0;">Qui si fa l'Italia o si muore!</blockquote>
        `
  },
  vittorio: {
    title: 'Vittorio Emanuele II',
    content: `
            <h2 style="font-size: 3.6rem; margin-bottom: 2rem; color: white">Vittorio Emanuele II - Il Padre della Patria</h2>
            <img src="img/Vittorio_Emanuele_II.jpg" alt="Vittorio Emanuele II" style="max-width: 300px; float: right; margin: 0 0 20px 20px;">
            <p class="timeline-year" style="font-size: 2.4rem; color: #e2b144;">1820-1878</p>
            <p class="content-text" style="font-size: 1.8rem; line-height: 1.6; margin-bottom: 2rem; color: white">Ultimo re di Sardegna e primo re d'Italia, guidò il processo di unificazione nazionale. Mantenne lo Statuto Albertino anche dopo le sconfitte del 1848-49, guadagnandosi il soprannome di "Re Galantuomo". Sotto il suo regno, il Piemonte divenne il punto di riferimento per le speranze unitarie italiane.</p>
            <p class="content-text" style="font-size: 1.8rem; line-height: 1.6; margin-bottom: 2rem; color: white">La sua capacità di mediazione tra le diverse forze politiche e il suo sostegno alle iniziative di Cavour furono fondamentali per il successo del Risorgimento. L'ingresso a Roma nel 1870 completò l'unificazione territoriale del Regno d'Italia.</p>
            <blockquote class="quote" style="font-size: 2.2rem; color: #e2b144; margin: 3rem 0;">Siamo soli contro tutti, tanto meglio: avremo più gloria!</blockquote>
        `
  }
};

document.querySelectorAll('.modal-trigger').forEach(button => {
  button.addEventListener('click', () => {
    const patriota = button.getAttribute('data-patriota');
    modalContent.innerHTML = patriotiInfo[patriota].content;
    modalContainer.style.display = 'block';
  });
});

modalClose.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

// touch events per mobile
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
});

track.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  if (touchStartX - touchEndX > swipeThreshold) {
    // Swipe left
    nextButton.click();
  }
  if (touchEndX - touchStartX > swipeThreshold) {
    // Swipe right
    prevButton.click();
  }
}
