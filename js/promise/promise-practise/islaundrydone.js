let laundryDone = new Promise((resolve, rejcet) => {
  isLaundry = true;

  if (isLaundry) {
    resolve('done')
  } else {
    rejcet('not done')
  }
});

laundryDone.then((onResolve) => {
  console.log('the laundry is' + onResolve)
}).catch((onReject) => {
  console.log('the laundry is' + onReject)
});