const form = document.querySelector('.login-form');
const btn = document.querySelector('button[type="submit"]');
const inputPass = document.querySelector('input[type="password"]');
const inputEm = document.querySelector('input[type="email"]');
class Res{
  email;
  password;
  constructor(params){
    this.email = params.email;
    this.password = params.password;
  }
}

form.addEventListener('submit', event =>{
  event.preventDefault();
  if(inputPass.value.trim() === '' || inputEm.value.trim() === ''){
    alert('All form fields must be filled in');
  }
  const result = new Res({
    email: inputEm.value.trim(),
    password: inputPass.value.trim(),
})
  console.log(result);
form.reset();
});