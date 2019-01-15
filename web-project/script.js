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