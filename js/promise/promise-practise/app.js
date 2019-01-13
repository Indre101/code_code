const {
  checkAvailabitlity
} = require('./library');

let chair = checkAvailabitlity('chair');


checkAvailabitlity(item).then((resolvedValue) => {
  return resolvedValue;
}).then((rejectValue) => {
  return rejectValue;
})