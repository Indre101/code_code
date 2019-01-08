//let cNote = new Audio('cnote.wav');
//let c = document.getElementById('c');

const keys = ['c', 'c-sharp', 'd', 'd-sharp', 'e', 'f', 'f-sharp', 'g', 'g-sharp', 'a', 'a-sharp', 'b', 'c-last'];
const notes = [];

keys.forEach(function (key) {
  notes.push(document.getElementById(key));
})

/*let audioSound = () => {
  audio.oncanplauthrough = function () {
    cNote.play();
  }
  cNote.loop = true;
  cNote.onended = function () {
    cNote.play();
  }
}*/

const changeColor = (event) => {
  event.target.style.backgroundColor = 'blue';

}

const regularColor = (event) => {
  event.target.style.backgroundColor = '';
}

let mano = function (note) {
  note.onmousedown = function () {

    changeColor(event);
  }


  note.onmouseup = function () {
    regularColor(event);
  }
}

notes.forEach(mano);
//c.onclick = audioSound;


const lineTwo = document.getElementById('lineTwo');
const lineThree = document.getElementById('lineThree');
const lineFour = document.getElementById('line-four');
const reset = document.getElementById('reset');
const to = document.getElementById('to');
const you = document.getElementById('you');
const letterB = document.getElementById('letter-b');
const lastWord = document.getElementById('optional');

lineThree.hidden = true;
lineFour.hidden = true;
reset.hidden = true;
optional.hidden = true;

lineTwo.onclick = function () {
  lineThree.hidden = false;
  lineTwo.hidden = true;
  to.innerHTML = 'DEAR';
  you.innerHTML = 'FRIE-';

}

lineThree.onclick = function () {
  lineFour.hidden = false;
  lineThree.hidden = true;
  optional.style.display = 'inline-block';

}

lineFour.onclick = function () {
  lineFour.hidden = true;
  reset.hidden = false;
  optional.style.display = 'none';
  to.innerHTML = 'TO';
  you.innerHTML = 'YOUU';
}

reset.onclick = function () {
  reset.hidden = true;
  lineTwo.hidden = false;
  to.innerHTML = 'TO';
  you.innerHTML = 'YOU!';
}