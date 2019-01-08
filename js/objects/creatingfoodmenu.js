const menu = {
    _courses: {
      appetizers: [],
      //get gappetizers(){   },
      //  set sappetizers(apetizerIn){  },


      mains: [],
      //   get gmain(){  },
      //    set smain(mainIn){ },

      desserts: [],
      //    get gadesserts(){ },
      //    set sdesserts(dessertIn){      }     
    },

    get gcourses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.mains
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
          name,
          price
        },

        courseAddition(courseName) {
          if (courseName === 'main') {
            return this._courses.mains.push(this.dish)
          } else if (courseName === 'appetizer') {
            return this._courses.appetizers.push(this.dish);
          } else if (courseName === 'dessert') {
            return this._courses.dessert.push(this.dish);
          } else {
            return 'Write a valid course name: main appetizer or dessert'
          }
        }
    }

  },
  getRandomDishFromCourse(courseName) {
    const dishes = Object.entries(menu._courses)
    return this._courses[Math.floor(Math.random() * dishes.length)];
  },
  generateRandomMea() {
    let appetizer = this.getRandomDishCourse('appetizer');
    let main = this.getRandomDishCourse('main');
    let dessert = this.getRandomDishCourse('dessert');

    return `The appetizer was ${appetizer.name} main course was ${main.name} and dessert ${dessert.name} the total price is ${totalPrice}$`
  }

};

menu.addDishToCourse('main', 'duck', 52);