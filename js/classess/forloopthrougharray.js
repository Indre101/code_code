const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i in arr) {
    number = arr[i];

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    i = 1;
    while (i < number) {
      i = i * 2;
    }
    results.push(i);
  }
  return results
}

console.log(smallestPowerOfTwo(numbers))
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]