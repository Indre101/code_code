// Write your code here:
const convertToBaby = (newAr) => {
  const word = 'baby '
  const animalA = [];
  for (let i = 0; i < newAr.length; i++) {
    animalA.push(word + newAr[i])

  }
  return animalA
}







// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))