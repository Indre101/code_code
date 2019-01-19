let spiderman = 'spiderman.jpg'
let building = 'building.jpg';
let building1 = 'building1.jpg';
let closed = 'door.jpg'

let firstDoor = document.getElementById('firstDoor');
let secondDoor = document.getElementById('secondDoor');
let thirdDoor = document.getElementById('thirdDoor');
let start = document.getElementById('start');

//  start button geting clicked
const startClicked = () => {
  start.style.webkitAnimationPlayState = 'paused';
  start.innerHTML = 'Good Luck!';
}

const notClicked = () => {
  firstDoor.src = closed;
  secondDoor.src = closed;
  thirdDoor.src = closed;
}


// door opening;

function randomDoors() {
  const numOfDoors = 3;
  let randomDoor = Math.floor(Math.random() * 3);

  switch (randomDoor) {
    case 1:
      randomDoor = spiderman;
      return randomDoor;
    case 2:
      randomDoor = building;
      return randomDoor;
    default:
      randomDoor = building1;
      return randomDoor;
  }

}

start.onclick = function () {
  startClicked();
  firstDoor.src = randomDoors();
}


// function doorOpened() {
//   if (startClicked()) {

//     firstDoor.src = randomDoors();
//   } else {
//     notClicked()
//   }
// }



firstDoor.onclick = function (params) {
  doorOpened();

}









// firstDoor.onclick = function () {

//   firstDoor.src = building1;
// };