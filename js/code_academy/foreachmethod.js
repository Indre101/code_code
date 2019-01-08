const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(food => console.log('I want to eat a ' + food))

fruits.forEach(function (food1) {
  console.log('I want to eat a ' + food1);
})

function addFood(element) {
  console.log('I want to eat a ' + element);

};

fruits.forEach(addFood);