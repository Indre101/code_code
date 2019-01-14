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

let dusting = function () {
  return new Promise((resolve, reject) => {
    resolve('dusting')
  })
}

dusting().then(function (message) {
  console.log(message + ' are finished')
});