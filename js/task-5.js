function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const span = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', event =>{
const hexColor = getRandomHexColor();
 span.textContent = hexColor;
  body.style.backgroundColor =  hexColor;
})
