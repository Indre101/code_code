let laundry = function () {
  return new Promise(function (resolve, reject) {
    resolve('laundry ')
  })
};

// message parameter can be names any word
// passed into first laundry function message read as undifiened

let dishes = function (message) {
  return new Promise((resolve, reject) => {
    resolve(message + 'dishes ')
  })
}

let dusting = function (message) {
  return new Promise((resolve, reject) => {
    resolve(message + 'dusting')
  })
}

Promise.all([laundry(), dishes(), dusting()]).then(function () {
  console.log('is done');
})