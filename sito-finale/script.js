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
});

modalClose.addEventListener('click', () => {
    photoModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) {
        photoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
