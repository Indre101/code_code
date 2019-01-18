let spiderman = 'spiderman.jpg'
let building = 'building.jpg';
let building1 = 'building1.jpg';
let closed = 'door.jpg'

let firstDoor = document.getElementById('firstDoor');
let secondDoor = document.getElementById('secondDoor');
let thirdDoor = document.getElementById('thirdDoor');
let start = document.getElementById('start');



function start() {

  if (start.onclick) {

    start.innerHTML = 'Good Luck';

  } else {
    firstDoor.src = closed;
    secondDoor.src = closed;
    thirdDoor.src = closed;
  }

}




// firstDoor.onclick = function () {

//   firstDoor.src = building1;
// };