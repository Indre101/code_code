const buttonMenu = document.getElementById('menu');
const menuContent = document.getElementById('menuContent');

menuContent.hidden = true;

buttonMenu.onmouseover = function () {
  buttonMenu.style.backgroundColor = '#75B1D7';
  menuContent.hidden = false;
  menuContent.position = 'absolute';



}

buttonMenu.onmouseout = function () {
  buttonMenu.style.backgroundColor = '';
  menuContent.hidden = true;

}