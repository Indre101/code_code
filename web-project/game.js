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

//
const doors = ['firstDoor', 'secondDoor', 'thirdDoor'];
let newDoor = [];

//
doors.forEach(function (door) {
  newDoor.push(document.getElementById(door))
})

// function to assign a photo
function openDoors(event) {

  event.target.src = randomDoors();

  if (event.target.src != 'door.jpg') {
    alert('the Door has been opened');
  }

}

//// function to open the doors on click

function open(door) {
  door.onclick = function () {
    openDoors(event);
  }
}

/////// checking if the doors are clicked


///


//// combined function


newDoor.forEach(open);
//newDoor.forEach(checks);
// function doorChoosing(event) {


// }