// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in, .zoom-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1
});

faders.forEach(fader => observer.observe(fader));

// Counter animation
const counter = document.getElementById("counter");
let started = false;

const animateCount = () => {
  let count = 0;
  const target = 1500;
  const interval = setInterval(() => {
    count += 10;
    counter.textContent = count;
    if (count >= target) clearInterval(interval);
  }, 10);
};

const stats = document.querySelector(".stats");
const countObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      animateCount();
      started = true;
    }
  });
}, { threshold: 0.5 });

countObserver.observe(stats);