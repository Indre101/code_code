// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function (key) {
  notes.push(document.getElementById(key));
})



const keyPlay = (event) => {
  event.target.style.backgroundColor = 'blue';
}

const keyReturn = (event) => {
  event.target.style.backgroundColor = '';
}

let manoFunkcija = (note) => {
  note.onmousedown = function () {
    keyPlay(event)
  }

  note.onmouseup = function () {
    keyReturn(event);
  }
}


notes.forEach(manoFunkcija);


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');
let one = document.getElementById('letter-note-one');
let two = document.getElementById('letter-note-two');

let six = document.getElementById('letter-note-six');
let five = document.getElementById('letter-note-five');
let g = document.getElementById('letter-note-three');
let e = document.getElementById('letter-note-four');
let wordOne = document.getElementById('word-one');
let wordTwo = document.getElementById('word-two');
let wordThree = document.getElementById('word-three');
let wordFour = document.getElementById('word-four');
let wordFive = document.getElementById('word-five');
let wordSix = document.getElementById('word-six');




// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');


// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function () {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  six.innerHTML = 'D';
  six.innerHTML = 'C';
  wordFive.innerHTML = 'DEAR';
  wordSix.innerHTML = 'FRI-'
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function () {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  lastLyric.style.display = 'inline-block';
  g.innerHTML = 'G';
  e.innerHTML = 'E';
  five.innerHTML = 'C';
  six.innerHTML = 'B';

}

/* Write anonymous event handler property and function for the third progress button*/

nextThree.onclick = function () {
  startOver.hidden = false;
  nextThree.hidden = true;
  wordOne.innerHTML = 'HAP-'
  wordTwo.innerHTML = 'PY-'
  wordThree.innerHTML = 'BIRTH'
  wordFour.innerHTML = 'DAY'
  wordFive.innerHTML = 'TO'
  wordSix.innerHTML = 'YOU'
  one.innerHTMl = 'F';
  two.innerHTML = 'F';
  g.innerHTML = 'E';
  e.innerHTML = 'C';
  five.innerHTML = 'D';
  six.innerHTML = 'C';
  lastLyric.style.display = 'none';

}



// This is the event handler property and function for the startOver button
startOver.onclick = function () {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}