const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleButton(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  modalInner.innerHTML = `<img src="${imgSrc.replace(
    '400',
    '800'
  )}" alt="${name}"/>
        <p>${desc}</p> `;
  modalOuter.classList.add('open');
}

cardButtons.forEach((button) => button.addEventListener('click', handleButton));

modalOuter.addEventListener('click', (e) => {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    modalOuter.classList.remove('open');
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'Escape' && modalOuter.classList.contains('open')) {
    modalOuter.classList.remove('open');
  }
});
