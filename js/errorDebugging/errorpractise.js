const a = 0;

// console logs built in error in white print
try {
  a = 'b';
} catch (e) {
  console.log(e)
};

//concole logs the sentece in white print
console.log(Error('Something is wrong'));

//throws red error
//throw Error('Fix this soon change a to 0')

// prints error text in white
try {
  throw Error('Make sure the syntax is correct');
} catch (e) {
  console.log(e);
}