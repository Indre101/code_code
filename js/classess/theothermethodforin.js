const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
  let results = [];
  // The 'outer' for loop:
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    // The 'inner' while loop:
    // We needed to create a new variable!
    let j = 1;
    while (j < number) {
      j = j * 2;
    }
    results.push(j);
  }
  return results
}

console.log(smallestPowerOfTwo(numbers))