const {
  checkAvailabitlity
} = require('./library');

let chair = checkAvailabitlity('chair');
console.log(chair)

checkAvailabitlity.then('Proccesing', 'Failed');