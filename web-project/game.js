let spiderman = 'spiderman.jpg'
let building = 'building.jpg';
let building1 = 'building1.jpg';
let closed = 'door.jpg'

let firstDoor = document.getElementById('firstDoor');
let secondDoor = document.getElementById('secondDoor');
let thirdDoor = document.getElementById('thirdDoor');
let start = document.getElementById('start');

//  start button geting clicked



const notClicked = () => {
  firstDoor.src = closed;
  secondDoor.src = closed;
  thirdDoor.src = closed;

}

const startClicked = () => {

  start.onclick = function () {
    start.style.webkitAnimationPlayState = 'paused';
    start.innerHTML = 'Good Luck!';
  }
}


notClicked();

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

function isClicked() {

  if (!startClicked) {
    // firstDoor.src = building;
    notClicked();
  } else {
    firstDoor.src = building;
    //notClicked();

  }

}



isClicked();

// firstDoor.onclick = function (params) {
//   doorOpened();

// }









// firstDoor.onclick = function () {

//   firstDoor.src = building1;
// };