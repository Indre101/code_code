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
    /// without message in parameters it prints out result of last Promise
    laundry().then((result) => {
      return dishes(result)
    }).then((result) => {
      return dusting(result)
    }).then((result) => {
      console.log(result + ' finished')
    })
    