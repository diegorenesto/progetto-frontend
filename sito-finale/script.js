// Debug info
console.log('Window dimensions:', window.innerWidth, 'x', window.innerHeight);
console.log('User Agent:', navigator.userAgent);
console.log('Current URL:', window.location.href);

// DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
  console.time('Page Load Performance');

  // DOM Elements count
  const allElements = document.getElementsByTagName('*');
  console.log('Total DOM elements:', allElements.length);

  // Check viewport and device
  const isMobile = window.matchMedia('(max-width: 500px)').matches;
  console.log('Is Mobile Device:', isMobile);

  // Monitor scroll position
  let lastScrollPosition = window.pageYOffset;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    console.log('Scroll Position:', currentScroll);
    lastScrollPosition = currentScroll;
  });

  // Monitor window resize
  window.addEventListener('resize', () => {
    console.log('Window Resized to:', window.innerWidth, 'x', window.innerHeight);
  });
});

// Performance monitoring
window.addEventListener('load', () => {
  console.timeEnd('Page Load Performance');
  const performance = window.performance;
  console.log('Page Load Timing:', performance.timing);
});

// burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  console.log('Menu toggle clicked');
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');

  // esempio di monitoraggio dello stato del menu
  const menuState = navLinks.classList.contains('active') ? 'opened' : 'closed';
  console.log('Menu state:', menuState);
});

// navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const heroSection = document.querySelector("#hero");

  if (!heroSection) {
    console.warn('Hero section not found in DOM');
    return;
  }

  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
  const scrollPercentage = (window.scrollY / heroBottom) * 100;

  console.log('Scroll percentage:', scrollPercentage.toFixed(2) + '%');

  document.body.style.setProperty('--scroll', scrollPercentage + '%');

  if (window.scrollY > heroBottom) {
    navbar.classList.add("scrolled");
    console.log('Navbar state: scrolled');
  } else {
    navbar.classList.remove("scrolled");
    console.log('Navbar state: default');
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

    // Update active state
    navItems.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
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

// funzionalità foto gallery
const photoItems = document.querySelectorAll('.photo-item');
const photoModal = document.querySelector('.photo-modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalYear = document.querySelector('.modal-year');
const modalClose = document.querySelector('.modal-close');

photoItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const year = item.dataset.year;
    const location = item.querySelector('.photo-location').textContent;

    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalTitle.textContent = location;
    modalYear.textContent = year;
    photoModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  // close modal
  modalClose.addEventListener('click', () => {
    photoModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});

// CHIUSURA FOTO ULTIMA SEZIONE ESPLORA.HTML
// Fix: chiusura modale al click sulla X e fuori dall'immagine
modalClose.addEventListener('click', () => {
  photoModal.style.display = 'none';
  document.body.style.overflow = '';
});

// opzionale: chiudi la modale cliccando fuori dal contenuto
photoModal.addEventListener('click', (e) => {
  if (e.target === photoModal) {
    photoModal.style.display = 'none';
    document.body.style.overflow = '';
  }
});

// BOM History API usage
// Funzione per aggiornare la cronologia e modificare l'URL senza ricaricare la pagina
const updateHistory = (sectionId) => {
  const newUrl = `${window.location.pathname}#${sectionId}`;
  window.history.pushState({ section: sectionId }, '', newUrl);
  console.log('History updated:', sectionId);
};

// Storage API usage
// Funzione per salvare le preferenze dell'utente
const saveUserPreferences = () => {
  const preferences = {
    theme: 'dark',
    fontSize: window.getComputedStyle(document.body).fontSize
  };
  localStorage.setItem('userPrefs', JSON.stringify(preferences));
  console.log('Preferences saved:', preferences);
};

// carica le preferenze dell'utente
const loadUserPreferences = () => {
  const savedPrefs = localStorage.getItem('userPrefs');
  if (savedPrefs) {
    const prefs = JSON.parse(savedPrefs);
    console.log('Loaded preferences:', prefs);
    return prefs;
  }
  return null;
};


// API visibilità documento
document.addEventListener('visibilitychange', () => {
  console.log('Page visibility:', document.visibilityState);
});