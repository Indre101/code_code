const {
  checkInventory
} = require('./library.js');

const order = [
  ['sunglasses', 1],
  ['bags', 2]
];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:

checkInventory(order).then((handleSuccess) => {
  console.log(handleSuccess)
}).catch((handleFailure) => {
  console.log(handleFailure);
});

// or just type 
checkInventory(order).then(handleSuccess).catch(handleFailure);