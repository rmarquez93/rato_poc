const modes = document.querySelectorAll('.mode');
const cards = document.querySelectorAll('.top-card');
const carousel = document.querySelector('.carousel');

modes.forEach((mode) => {
  mode.addEventListener('click', () => {
    modes.forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
    mode.classList.add('active');
    mode.setAttribute('aria-selected', 'true');
    cards.forEach((card) => { card.hidden = card.dataset.kind !== mode.dataset.mode; });
    carousel.scrollTo({ left: 0, behavior: 'smooth' });
  });
});

document.querySelector('.next').addEventListener('click', () => carousel.scrollBy({ left: 360, behavior: 'smooth' }));
document.querySelector('.previous').addEventListener('click', () => carousel.scrollBy({ left: -360, behavior: 'smooth' }));
