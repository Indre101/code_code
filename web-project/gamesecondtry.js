let spiderman = 'spiderman.jpg'
let building = 'building.jpg';
let building1 = 'building1.jpg';
let building2 = 'building3.jpg';

let closed = 'door.jpg'
let numOfClosedDoors = 3;

let firstDoor = document.getElementById('firstDoor');
let secondDoor = document.getElementById('secondDoor');
let thirdDoor = document.getElementById('thirdDoor');
let start = document.getElementById('start');

//  start button geting clicked



const notClicked = () => {

  if (start.innerHTML === 'Start!') {
    firstDoor.src = closed;
    secondDoor.src = closed;
    thirdDoor.src = closed;
  } else {
    return false;
  }

}

let startClicked = () => {

  start.style.webkitAnimationPlayState = 'paused';
  start.innerHTML = 'Good Luck!';
}

const isCliked = () => {
  if (notClicked() === true) {
    return true
  } else {
    startClicked();
  }
}

start.onclick = function () {
  isCliked();
  ////
}

// door opening;

// assigning different pictures to numbers


function radomPhotoToDoors(maxNumberToEnter) {

  let numberOfThePhoto = Math.floor(Math.random() * maxNumberToEnter);

  switch (numberOfThePhoto) {
    case 0:
      return building;

      break;
    case 1:
      return building1;
      break;

    case 2:
      return building2;
      break;

    default:
      return spiderman;
      break;
  };
}

//door opening with photos

function openDoors(event) {
  // event.target.style.pointerEvents = 'none';



}
////////////////////

function openingOfTheDoors() {


  firstDoor.onclick = function () {
    openDoors(event);
  }

  secondDoor.onclick = function () {

    openDoors(event);


  }


  thirdDoor.onclick = function () {

    openDoors(event);


  }
}