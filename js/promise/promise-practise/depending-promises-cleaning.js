let laundry = function () {
  return new Promise(function (resolve, reject) {
    resolve(' laundry')
  })
};

laundry().then(function (message) {
  console.log('is finished' + message)
});