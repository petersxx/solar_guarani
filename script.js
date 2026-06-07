// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Hero slideshow
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 6000);

// Instagram carousel
const igTrack = document.getElementById('igTrack');
function igScroll(direction) {
  if (!igTrack) return;
  const card = igTrack.querySelector('.ig-post');
  if (!card) return;
  const gap = parseFloat(getComputedStyle(igTrack).columnGap || getComputedStyle(igTrack).gap) || 0;
  const distance = card.getBoundingClientRect().width + gap;
  igTrack.scrollBy({ left: direction * distance, behavior: 'smooth' });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => revealObserver.observe(el));

// Contact form (front-end only demo)
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const success = document.getElementById('form-success');
  success.classList.add('show');
  form.reset();
  setTimeout(() => success.classList.remove('show'), 5000);
}
