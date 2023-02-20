function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
console.log(bodyEl);

const buttonChangeEl = document.querySelector('.change-color');
console.log(buttonChangeEl);

const spanEl = document.querySelector('.color');
console.log(spanEl);

buttonChangeEl.addEventListener('click', changeColor);

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}