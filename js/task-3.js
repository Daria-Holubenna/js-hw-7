const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


input.addEventListener('input', event =>{
const value = input.value.trim();
if(value !== ''){
    span.textContent = value;
}else{
  span.textContent = "Anonymous";
}
});