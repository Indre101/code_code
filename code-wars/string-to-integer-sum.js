function sumMix(x) {

  for (let i = 0; i < x.length; i++) {
    //console.log(x[i]);

    if (typeof x[i] === 'string') {
      x[i] = parseInt(x[i], 10);

    } else {
      x[i];
    }

  }
  return x.reduce((a, b) => a + b, 0);
}

x = [1, '2', '4', 5]

console.log(sumMix(x));