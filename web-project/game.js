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

let startClicked = () => {

  start.style.webkitAnimationPlayState = 'paused';
  start.innerHTML = 'Good Luck!';
}

// door opening;


//
const doors = ['firstDoor', 'secondDoor', 'thirdDoor'];
let newDoor = [];

//
doors.forEach(function (door) {
  newDoor.push(document.getElementById(door))
})

function randomNumber() {
  const numOfDoors = 3;
  let number = Math.floor(Math.random() * 3);
  return number;
}

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
function openDoors(event) {

  if (event.target.src === randomDoors(1)) {

    alert('the Door has been opened');

  }
  //else {
  //   event.target.src = randomDoors(2);
  //   event.target.src = randomDoors(3);
  // }

}

//// function to open the doors on click

function open(door) {
  door.onclick = function () {
    door.src = randomDoors();

    //openDoors(event);
  }
  // door.onmouseout = function () {
  //   door.src = door
  // }
}

/////// checking if the doors are clicked


///


//// combined function


newDoor.forEach(open);
//newDoor.forEach(checks);
// function doorChoosing(event) {


// }