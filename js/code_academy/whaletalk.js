let input = 'Hi, Human';
input = input.toLowerCase();
const vowels = ['a', 'e', 'i', 'u', 'o'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i])
    }

  }

}

const letter = (m) => {
  for (let m = 0; m < resultArray.length; m++) {
    switch (resultArray[m]) {
      case 'e':
        resultArray[m] = 'ee';
        break;
      case 'u':
        resultArray[m] = 'uu';
        break;
    }
  }
}
letter();
console.log(resultArray.join('').toUpperCase());