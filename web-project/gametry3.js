let spiderman = 'spiderman.jpg'
let building = 'building.jpg';
let building1 = 'building1.jpg';
let building2 = 'building3.jpg';

let door1;
let door2;
let door3;

let closed = 'door.jpg'
let numOfClosedDoors = 3;

let firstDoor = document.getElementById('firstDoor');
let secondDoor = document.getElementById('secondDoor');
let thirdDoor = document.getElementById('thirdDoor');
let startButton = document.getElementById('start');
let currentlyPlaying = true;



//  start button geting clicked



const notStarted = () => {

  if (startButton.innerHTML === 'Start!') {

    return true;
  } else {

    return false;
  }

}



let startClicked = () => {

  startButton.style.webkitAnimationPlayState = 'paused';
  startButton.innerHTML = 'Good Luck!';

}

startButton.onclick = function () {
  startClicked();
}

// door functionality

function isSpiderman(door) {

  if (door.src === spiderman) {
    return false;
  } else {
    return true;
  }
}


function isItOpen(door) {

  if (door.src === closed) {
    return true;
  } else {
    //door.style.pointerEvents = 'none';
    return false;
  }
}


/// checking if all doors are isItOpen


/// assigning dooors

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

function openDoors(door) {

  let randomScenario = Math.floor(Math.random() * 3);

  if (randomScenario === 0) {

    door1.src = spiderman;
    door2.src = radomPhotoToDoors(3);
    door3.src = radomPhotoToDoors(3);


  } else if (randomScenario === 1) {
    door1.src = radomPhotoToDoors(3);
    door2.src = spiderman;
    door3.src = radomPhotoToDoors(3);


  } else if (randomScenario === 2) {

    door1.src = radomPhotoToDoors(3);
    door2.src = radomPhotoToDoors(3);
    door3.src = spiderman;
    //event.target.style.pointerEvent = 'none';


  }
}





firstDoor.onclick = function () {
  if (!notStarted() && !isItOpen(firstDoor)) {

    firstDoor.src = door1;

    //openDoors(door1);
    //isSpiderman(door1);
    areAllOpen(door1);

  }
}

secondDoor.onclick = function () {
  if (!notStarted() && !isItOpen(secondDoor)) {

    secondDoor.src = door2;


    // openDoors(door2);
    // isSpiderman(door2);
    areAllOpen(door2);

  }
}

thirdDoor.onclick = function () {
  if (!notStarted() && !isItOpen(thirdDoor)) {

    thirdDoor.src = door3;

    areAllOpen(door3);

    // openDoors(door3);
    //isSpiderman(door3);
  }
}



// function startOver() {
//   firstDoor.src = closed;
//   secondDoor.src = closed;
//   thirdDoor.src = closed;
//   startButton.innerHTML = 'Good Luck';
//   playingTheGame();

// }

// function areAllOpen(door) {

//   numOfClosedDoors--;

//   if (numOfClosedDoors === 1) {
//     start.innerHTML = 'You Win! Play again?'
//   } else {
//     start.innerHTML = 'You Loose! Play again?'

//   }

//   // startButton.onclick = function () {

//   //   startOver();

//   // }
// }