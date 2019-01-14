let laundry = function () {
  return new Promise(function (resolve, reject) {
    resolve(' laundry')
  })
};

let dishes = function () {
  return new Promise((resolve, reject) => {
    resolve('dishes ')
  })
}

dishes().then(function (message) {
  console.log(message + 'are finished')
});