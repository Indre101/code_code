let spiderman = 'spiderman.jpg'
let building = 'building.jpg';
let building1 = 'building1.jpg';
let building2 = 'building3.jpg';

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
function callingNumber(numOfDoors) {

  let generateNumber = Math.floor(Math.random() * numOfDoors);
  return generateNumber;
}


/// assigning door photo values

function doorOption(door) {


  switch (door) {
    case 1:
      door = building1;
      return door;
    case 2:
      door = building;
      return door;
    case 0:
      door = building2;
      return door;
    default:
      door = spiderman;
      return door;
  }

}


/// assignt the photo to the door
const doorAssign = (event) => {


  //event.target.src = doorOption(callingNumber(4));
  if (event.target === firstDoor && event.target.src === closed && secondDoor.src != spiderman && thirdDoor.src != spiderman) {
    //firstDoor.src = spiderman;
    event.target.src = doorOption(callingNumber(4));
  } else if (event.target === secondDoor && event.target.src === closed && firstDoor.src != spiderman && thirdDoor.src != spiderman) {
    event.target.src = doorOption(callingNumber(4));
    
  } else if (event.target === thirdDoor && event.target.src === closed && secondDoor.src != spiderman && firstDoor.src != spiderman) {
    thirdDoor.src = spiderman;

  } 

}








/// reasigning the doors to stay the same
const theSamePhoto = (event) => {
  event.target.style.pointerEvents = 'none';
}

/// function for checking if door is opened
const noDoubleClicking = (event) => {

  if (event.target.src != 'door.jpg') {
    doorAssign(event);

    theSamePhoto(event); // two functions called at the same time;

  } else {

    return false;
  }
}




// the onclick function for doors

const bandymas = (door) => {
  door.onclick = function () {

    noDoubleClicking(event);


  }
}