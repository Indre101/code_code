const speciesArray = [{
  speciesName: 'shark',
  numTeeth: 50
}, {
  speciesName: 'dog',
  numTeeth: 42
}, {
  speciesName: 'alligator',
  numTeeth: 80
}, {
  speciesName: 'human',
  numTeeth: 32
}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

/*
// As a function declaration AND using a named function:
function sortSpeciesByTeeth(arr) {
      const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
      return arr.sort(compareTeeth)
}
*/

console.log(sortSpeciesByTeeth(speciesArray))