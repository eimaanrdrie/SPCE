
const track = document.getElementById('track');
const slides = [...document.querySelectorAll('.slide')];
const dots = document.getElementById('dots');
const counter = document.getElementById('counter');
let current = 0;

slides.forEach((slide, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
  dot.addEventListener('click', () => go(i));
  dots.appendChild(dot);
});

function update() {
  [...dots.children].forEach((dot, i) => dot.classList.toggle('active', i === current));
  counter.textContent = `${current + 1} / ${slides.length}`;
}

function go(index) {
  current = (index + slides.length) % slides.length;
  track.scrollTo({ left: current * track.clientWidth, behavior: 'smooth' });
  update();
}

document.getElementById('prev').addEventListener('click', () => go(current - 1));
document.getElementById('next').addEventListener('click', () => go(current + 1));

let raf;
track.addEventListener('scroll', () => {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const i = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
    if (i !== current && i >= 0 && i < slides.length) {
      current = i;
      update();
    }
  });
}, { passive: true });

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') go(current + 1);
  if (e.key === 'ArrowLeft') go(current - 1);
});

window.addEventListener('resize', () => {
  track.scrollLeft = current * track.clientWidth;
});

document.getElementById('fullscreen').addEventListener('click', async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch (_) {}
});

update();
