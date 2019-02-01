let spiderman = "spiderman.jpg";
let building = "building.jpg";
let building1 = "building1.jpg";
let building2 = "building3.jpg";

let door1;
let door2;
let door3;

let closed = "door.jpg";
let numOfClosedDoors = 3;

let firstDoor = document.getElementById("firstDoor");
let secondDoor = document.getElementById("secondDoor");
let thirdDoor = document.getElementById("thirdDoor");
let startButton = document.getElementById("start");
let currentPlay = true;

//  start button geting clicked

const notStarted = () => {
  if (currentPlay === false || startButton.innerHTML === "Start!") {
    return true;
  } else {
    return false;
  }
};

function noDoubleClicking(event) {
  event.target.style.pointerEvents = "none";
}

const startClicked = () => {
  startButton.style.webkitAnimationPlayState = "paused";
  startButton.innerHTML = "Good Luck!";
};

// door functionality

function isItOpen(door) {
  if (door.src === closed) {
    return true;
  } else {
    //door.style.pointerEvents = 'none';
    return false;
  }
}

function isTheDoorWrong(door) {
  if (door.getAttribute("src") === spiderman) {
    return true;
  } else {
    return false;
  }
}

/// checking if all doors are isItOpen
function areAllOpen(door) {
  numOfClosedDoors--;

  if (numOfClosedDoors === 0) {
    gameOver("win");
  } else if (isTheDoorWrong(door)) {
    gameOver();
  }
}

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
  }
}

//door opening with photos

function openDoors() {
  let randomScenario = Math.floor(Math.random() * 3);

  if (randomScenario === 0) {
    door1 = spiderman;
    door2 = radomPhotoToDoors(3);
    door3 = radomPhotoToDoors(3);
  } else if (randomScenario === 1) {
    door1 = radomPhotoToDoors(3);
    door2 = spiderman;
    door3 = radomPhotoToDoors(3);
  } else {
    door1 = radomPhotoToDoors(3);
    door2 = radomPhotoToDoors(3);
    door3 = spiderman;
  }
}

firstDoor.onclick = function() {
  if (!notStarted() && !isItOpen(firstDoor)) {
    firstDoor.src = door1;

    areAllOpen(firstDoor);

    if (firstDoor.getAttribute("src") != closed) {
      noDoubleClicking(event);
    }
  }
};

secondDoor.onclick = function() {
  if (!notStarted() && !isItOpen(secondDoor)) {
    secondDoor.src = door2;

    areAllOpen(secondDoor);

    noDoubleClicking(event);
  }
};

thirdDoor.onclick = function() {
  if (!notStarted() && !isItOpen(thirdDoor)) {
    thirdDoor.src = door3;

    areAllOpen(thirdDoor);

    noDoubleClicking(event);
  }
};

const gameOver = status => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! play again?";
  }
  // startButton.innerHTML = "Start!";
  currentPlay = false;
};
/// closed doors

function startOver() {
  firstDoor.src = closed;
  // console.log(firstDoor.src);
  secondDoor.src = closed;
  thirdDoor.src = closed;
  currentPlay = true;
  numOfClosedDoors = 3;
}

startButton.onclick = function() {
  startClicked();
  openDoors();

  if (
    notStarted()
    // startButton.innerHTML === "You win! Play again?" ||
    // startButton.innerHTML === "Game over! play again?"
  ) {
    startOver();
  }
};
