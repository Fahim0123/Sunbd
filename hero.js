// ---------------- Select Elements ----------------
const slides = document.querySelectorAll('.hero-slider .slide');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');
const currentSlideEl = document.getElementById('currentSlide');
const totalSlidesEl = document.getElementById('totalSlides');
const progressBar = document.querySelector('.slide-progress .progress-bar');
const autoplayToggle = document.getElementById('autoplayToggle');

let currentSlide = 0;
let totalSlides = slides.length;
let autoplay = true;
let intervalTime = 4000; // 4 seconds
let slideInterval;

// ---------------- Initialize ----------------
totalSlidesEl.textContent = totalSlides;
showSlide(currentSlide);
startAutoplay();

// ---------------- Functions ----------------
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  currentSlideEl.textContent = index + 1;
  resetProgressBar();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// ---------------- Progress Bar ----------------
function resetProgressBar() {
  progressBar.style.transition = 'none';
  progressBar.style.width = '0';
  setTimeout(() => {
    progressBar.style.transition = `width ${intervalTime}ms linear`;
    progressBar.style.width = '100%';
  }, 50);
}

// ---------------- Autoplay ----------------
function startAutoplay() {
  slideInterval = setInterval(() => {
    if (autoplay) nextSlide();
  }, intervalTime);
}

function toggleAutoplay() {
  autoplay = !autoplay;
  autoplayToggle.classList.toggle('fa-pause', autoplay);
  autoplayToggle.classList.toggle('fa-play', !autoplay);
}

// ---------------- Event Listeners ----------------
nextArrow.addEventListener('click', () => {
  nextSlide();
  resetAutoplay();
});

prevArrow.addEventListener('click', () => {
  prevSlide();
  resetAutoplay();
});

autoplayToggle.addEventListener('click', toggleAutoplay);

function resetAutoplay() {
  clearInterval(slideInterval);
  startAutoplay();
}
