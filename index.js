const root = document.querySelector('.block');
const mainColor = getComputedStyle(root).getPropertyValue('--main-color');
console.log(mainColor);
