const textInput = document.querySelector('#name-input');

const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
     
    textOutput.textContent = event.target.value.trim()

    if (event.target.value === '') {textOutput.textContent = 'Anonymous'}
});

console.log(textInput, textOutput);