const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      dishName,
      dishPrice
    };

    this._courses[courseName].push(dish)
  },

  getRandomDishFromCourse() {
    let appetizerDish = this._courses.appetizers[Math.floor(Math.random() * this._courses.appetizers.length)];
    let priceA = appetizerDish.dishPrice;

    let mainDish = this._courses.mains[Math.floor(Math.random() * this._courses.mains.length)];
    let priceM = mainDish.dishPrice;

    let dessertDish = this._courses.desserts[Math.floor(Math.random() * this._courses.desserts.length)];
    let priceD = dessertDish.dishPrice;

    const totalPrice = priceA + priceM + priceA;

    console.log(`The appetizer was ${appetizerDish.dishName}, the main dish was ${mainDish.dishName} and for dessert you had ${dessertDish.dishname} so the total price to pay is ${totalPrice}`)


  },
}

menu.addDishToCourse('mains', 'love', 52);
menu.addDishToCourse('appetizers', 'kk', 32);
menu.addDishToCourse('appetizers', 'hatfdde', 5);
menu.addDishToCourse('appetizers', 'hgfate', 54);
menu.addDishToCourse('appetizers', 'hate', 12);
menu.addDishToCourse('appetizers', 'sun', 10);
menu.addDishToCourse('appetizers', 'water', 34);
menu.addDishToCourse('desserts', 'water', 56);
menu.getRandomDishFromCourse('main');
menu.getRandomDishFromCourse();