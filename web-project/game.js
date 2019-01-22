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
function randomNumber() {
  const numOfDoors = 3;
  let number = Math.floor(Math.random() * 3);
  return number;
}


/// assigning door photo values

function randomDoors(door) {
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


// function to assign a photo

function photo(event) {





}




//// function to open the doors on click
const mano = (door) => {
  door.onclick = function () {
    photo(event);
  }
}

/////// checking if the doors are clicked


///


//// combined function


newDoor.forEach(photo);
//newDoor.forEach(checks);
// function doorChoosing(event) {


// }