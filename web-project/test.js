// function randomColor() {

//   let a = 3;

//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);

//   return `rgb(${r}, ${g}, ${b})`

// }


// console.log(randomColor());




function choosingDoor() {
  let doorArray = ['firstDoor', 'secondDoor', 'thirdDoor'];

  let randomDoor = Math.floor(Math.random() * 3);


  console.log(document.getElementById(doorArray[randomDoor]));

}

choosingDoor();