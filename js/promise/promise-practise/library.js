const items = {
  keys: 20,
  ball: 30,
  chair: 1,
  table: 3
}

const checkAvailabitlity = (item) => {
  console.log(`Checking availability of ${item}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (items[item] > 0) {
        console.log(`${item} is in stock and there is ${items[item]}`);
        resolve(item);
      } else {
        reject(`${item} is not in stock`)
      }

    }, 0)
  })
}

module.exports = {
  checkAvailabitlity
}