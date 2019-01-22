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
  if (notClicked === true) {
    return true
  } else {
    startClicked();
  }
}

start.onclick = function () {
  isCliked();
  newDoor.forEach(bandymas);
  ////
}

// door opening;


//

const doors = ['firstDoor', 'secondDoor', 'thirdDoor'];
let newDoor = [];


//
doors.forEach(function (door) {
  newDoor.push(document.getElementById(door))
})

// generating random number
function callingNumber() {
  const numOfDoors = 3;
  let generateNumber = Math.floor(Math.random() * 3);
  return generateNumber;
}


/// assigning door photo values

function doorOption(door) {
  switch (door) {
    case 1:
      door = spiderman;
      return door;
    case 2:
      door = building;
      return door;
    default:
      door = building1;
      return door;
  }

}

/// assignt the photo to the door
const doorAssign = (event) => {
  event.target.src = doorOption(callingNumber(callingNumber()));

}

/// reasigning the doors to stay the same
const theSamePhoto = (event) => {
  event.target.style.pointerEvents = 'none';
}

/// function for checking if door is opened
const noDoubleClicking = (event) => {

  if (event.target.src != 'door.jpg') {
    doorAssign(event);
    theSamePhoto(event)

  } else {
    
    return false;
  }
}

/// alerting message if the door was clicked
// const noClickingMessage = (event) => {

//   if (noDoubleClicking(event) === true) {
//     doorAssign(event)
//   } else if (noDoubleClicking(event) === false) {
//     theSamePhoto(event);

//   }
// }

// the onclick function for doors

const bandymas = (door) => {
  door.onclick = function () {
    noDoubleClicking(event);

  }
}