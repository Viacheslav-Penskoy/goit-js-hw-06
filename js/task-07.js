const inputChangeEl = document.querySelector('input#font-size-control');
console.log(inputChangeEl);

const abracadabraEl = document.querySelector('span#text');
console.log(abracadabraEl);

inputChangeEl.addEventListener('change', event => {
    abracadabraEl.style.fontSize = `${event.target.value}px`
});