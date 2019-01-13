let items = {
  keys: 20,
  ball: 30,
  chair: 1,
  table: 3
}

const {
  checkAvailabitlity
} = require('./library');

let chair = checkAvailabitlity('chair');


chair.then((resolvedValue) => {
  return resolvedValue;
}).catch((rejectValue) => {
  return rejectValue;
})