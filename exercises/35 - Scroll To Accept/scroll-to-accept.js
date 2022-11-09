const termsBox = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');
const watch = document.querySelector('.watch');

const ob = new IntersectionObserver(obCallback, {
  root: termsBox,
  threshold: 1,
});

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(termsBox.lastElementChild);
  }
}

ob.observe(termsBox.lastElementChild);
