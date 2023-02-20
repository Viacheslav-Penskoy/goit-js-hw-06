const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

const messageAlert = 'Все поля должны быть заполнены';

function onFormSubmit(event) {
  
    event.preventDefault();
  
    const formEl = event.currentTarget.elements;
        
    const email = formEl.email.value;
  
    const password = formEl.password.value.trim();

    const formData = { email, password };

    if (email === '' || password === '') {
        return alert(messageAlert);
    }
       
    console.log(formData);
  
    event.currentTarget.reset();
}

