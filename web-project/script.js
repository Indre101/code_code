const buttonMenu = document.getElementById('menu');
const menuContent = document.getElementById('menuContent');
//const link = document.getElementById('link');

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


const menuItems = ['aboutMe', 'contact', 'random', 'projects'];
const items = [];

menuItems.forEach(function (item) {
  items.push(document.getElementById(item));
});

const highlightedMenuItem = event => {
  event.target.style.backgroundColor = '#ffffff';

}

const changeBackColor = event => {
  event.target.style.backgroundColor = '';
};

const menuColorFunction = function (item) {

  item.onmouseover = function () {
    highlightedMenuItem(event);
  }

  item.onmouseout = function () {
    changeBackColor(event);
  }
}

items.forEach(menuColorFunction);

// menu items are highlighted when mouse is over them done.

// colorful side functionality

let colorArray = ['colorful', 'colorful1', 'colorful2', 'colorful3', 'colorful4', 'colorful5', 'colorful6', 'colorful7', 'colorful8', 'colorful9', 'colorful10', 'colorful11', 'colorful12'];
let colors = [];

colorArray.forEach(function (color) {
  colors.push(document.getElementById(color));
})

function randomColor() {

  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`
}


const changeColor = (event) => {
  event.target.style.backgroundColor = randomColor();
  //colorful.style.backgroundColor = 'red';
}

const changeBack = (event) => {
  event.target.style.backgroundColor = '';
}



let mano = function (color) {

  color.onmouseover = function () {
    changeColor(event);
  }


  color.onmouseout = function () {
    changeBack(event);
  }
}
colors.forEach(mano);

// end of color changing page side functionality