const inputChangeEl = document.querySelector('input#font-size-control');
console.log(inputChangeEl);

const spanEl = document.querySelector('span#text');
console.log(spanEl);

inputChangeEl.addEventListener('change', event => {
    spanEl.style.fontSize = `${event.target.value}px`
});