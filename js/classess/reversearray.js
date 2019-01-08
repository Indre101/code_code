// Write your code here:


const reverseArray = newArray => {
  let newA = []
  for (let i = newArray.length - 1; i >= 0; i--) {
    newA.push(newArray[i]);
  }
  return newA;


}






// When you're ready to test your code, uncomment the below and run: 
const sentence = ['sense.', 'make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];