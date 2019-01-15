const buttonMenu = document.getElementById('menu');
const menuContent = document.getElementById('menuContent');

menuContent.visibility = false;

buttonMenu.onclick = function () {
  buttonMenu.style.backgroundColor = 'yellow';
}