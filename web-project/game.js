let spiderman = 'spiderman.jpg'
let building = 'building.jpg';
let building1 = 'building1.jpg';
let closed = 'door.jpg'

let firstDoor = document.getElementById('firstDoor');
let secondDoor = document.getElementById('secondDoor');
let thirdDoor = document.getElementById('thirdDoor');
let start = document.getElementById('start');

//  start button geting clicked
const startClicked = () => start.innerHTML = 'Good Luck!';

const notClicked = () => {
  firstDoor.src = closed;
  secondDoor.src = closed;
  thirdDoor.src = closed;
}


// door opening;

function randomDoors() {
  const numOfDoors = 3;
  const randomDoor = Math.floor(Math.random() * 3);

  switch (door) {
    case 1:
      door = spiderman;

    case 2:
      door = building;

    default:
      door = building1;
      return door;
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