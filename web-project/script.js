const buttonMenu = document.getElementById('menu');
const menuContent = document.getElementById('menuContent');

// creating a menu that has a drop down list of options
menuContent.hidden = true;


buttonMenu.onmouseover = function () {
  buttonMenu.style.backgroundColor = '#75B1D7';
  menuContent.hidden = false;

  menuContent.onmouseover = function () {
    menuContent.hidden = false;

  }
}

buttonMenu.onmouseout = function () {
  buttonMenu.style.backgroundColor = '';
  menuContent.hidden = true;

  menuContent.onmouseout = function () {
    menuContent.hidden = true;
  }
}

// colorful side functionality

const colorful = document.getElementById('colorful');

function randomColor(r, g, b) {

  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  return `${r}${g}{b}`
}
console.log(randomColor(r, g, b));