// Select elements

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// Setup canvas for drawing
const { width, height } = canvas;
const moveAmount = 30;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let hue = 0;

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function

function draw({ key }) {
  hue += 1;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case 'ArrowUp':
      y -= moveAmount;
      break;
    case 'ArrowDown':
      y += moveAmount;
      break;
    case 'ArrowLeft':
      x -= moveAmount;
      break;
    case 'ArrowRight':
      x += moveAmount;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a clear function

function clearCanvas(e) {
  if (e.type === 'click' || e.key === 'Enter') {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
      'animationend',
      () => {
        canvas.classList.remove('shake');
      },
      { once: true }
    );
  }
}

// Key handlers

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// Event listeners

window.addEventListener('keydown', handleKey);

shakeButton.addEventListener('click', clearCanvas);
shakeButton.addEventListener('keyup', clearCanvas);
