// Write your code here:

const isTheDinnerVegan = array => {
  for (let i in array) {
    if (array[i].source === 'plant') {
      return true
    } else {
      return false
    }
  }
}


const meal = [{
  name: 'arugula',
  source: 'plant'
}, {
  name: 'tomatoes',
  source: 'plant'
}, {
  name: 'lemon',
  source: 'plant'
}, {
  name: 'olive oil',
  source: 'plant'
}];



// Feel free to comment out the code below to test your function

const dinner = [{
  name: 'hamburger',
  source: 'meat'
}, {
  name: 'cheese',
  source: 'dairy'
}, {
  name: 'ketchup',
  source: 'plant'
}, {
  name: 'bun',
  source: 'plant'
}, {
  name: 'dessert twinkies',
  source: 'unknown'
}];

console.log(isTheDinnerVegan(meal))
//console.log(isTheDinnerVegan(dinner))

// Should print false