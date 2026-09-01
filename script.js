// =====================================================
// NAVBAR: background change on scroll
// =====================================================
const navbar = document.getElementById('navbar');

function updateNavbarOnScroll() {
  if (window.scrollY > 12) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavbarOnScroll);
updateNavbarOnScroll();

// =====================================================
// MOBILE HAMBURGER MENU
// =====================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function closeMenu() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
}

hamburger.addEventListener('click', toggleMenu);

// Close the mobile menu whenever a nav link is tapped
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Close the mobile menu if the window is resized back to desktop width
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});

// =====================================================
// SCROLL REVEAL ANIMATIONS (IntersectionObserver)
// =====================================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));
