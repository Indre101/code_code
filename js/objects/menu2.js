const mealMaker = {
  menu: {

    courses: {
      appetizer: [],
      main: [],
      dessert: []
    },


    getTheDish(name, nameDish, price) {
      const dish = {
        serve: {
          nameDish,
          price
        },

        set desicion(name) {
          if (name === 'main') {
            mealMaker.menu.courses.main = mealMaker.menu.courses.main.push(this.serve);
          } else if (this.name === 'appetizer') {
            return this.menu.courses.appetizer.push(this.serve);
          } else if (this.name === 'dessert') {
            return this.dessert.push(this.serve);
          } else {
            return 'Please choose from: main, appetizer or dessert';
          }
        }

      }

    }
  }
}

mealMaker.menu.getTheDish('main', 'love', 52);
console.log(mealMaker.menu.courses)