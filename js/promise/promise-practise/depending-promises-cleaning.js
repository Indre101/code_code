let laundry = function () {
  return new Promise(function (resolve, reject) {
    resolve('laundry ')
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

laundry().then((result) => {
  return dishes(result)
}).then((result) => {
  return dusting(result)
}).then((result) => {
  console.log(result + ' finished')
})