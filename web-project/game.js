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

// function isClicked() {
//   // startClicked();

//   if (start.innerHTML === 'Start!') {
//     notClicked();

//   } else {
//     start.onclick = function () {
//       startClicked();
//     }

//   }

//   isClicked();

function checkIfDoorsTheSame(event) {

  event.target.src = randomDoors();


  if (event.target.src === spiderman) {
    event.target.src = building;
    event.target.src = building1;

  }

  // if (firstDoor.src === spiderman) {
  //   secondDoor.src !== spiderman;
  //   thirdDoor.src !== spiderman;
  // } else if (secondDoor.src === spiderman) {
  //   firstDoor.src !== spiderman;
  //   thirdDoor.src !== spiderman;
  // } else {
  //   firstDoor.src !== spiderman;
  //   secondDoor.src !== spiderman;
  // }

  // firstDoor.onclick = function () {
  //   doorChoosing(event);
  //   //firstDoor.src = randomDoors();
  // }

  // secondDoor.onclick = function () {
  //   doorChoosing(event);
  //   //firstDoor.src = randomDoors();
  // }

  // thirdDoor.onclick = function () {
  //   doorChoosing(event);
  //   //firstDoor.src = randomDoors();
  // }
}

firstDoor.onclick = function () {
  checkIfDoorsTheSame(event);
}

secondDoor.onclick = function () {
  checkIfDoorsTheSame()
}

thirdDoor.onclick = function () {
  checkIfDoorsTheSame()
}



// function doorChoosing(event) {


// }