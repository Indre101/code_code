class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  set isCheckedOut(newValue) {
    this._isCheckedOut = newValue;
  }

  toogleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  addRating(newRating) {
    this.ratings.push(newRating);
  }

  getAverageRating() {
    let avg = this.ratings.reduce((total, rating) => total + rating) / this.ratings.length;
    console.log(avg);
  }
}

/*const love = new Media('song', false, [9, 5])
love.addRating(4);
console.log(love.ratings)
love.toogleCheckOutStatus();
console.log(love.isCheckedOut);
love.getAverageRating();*/

// class for books

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
    this._ratings = [];
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

/*const shadow = new Book('Shadow', 'Stanley', 23);
shadow.addRating(6);
shadow.addRating(19);
shadow.toogleCheckOutStatus();
console.log(shadow);
shadow.getAverageRating();*/



/// class movie

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._ratings = [];
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

/*const alcatraz = new Movie('Alcatraz', 'Copola', 120);
alcatraz.addRating(5.5);
alcatraz.addRating(5.5);
alcatraz.addRating(5.5);
alcatraz.getAverageRating();
console.log(alcatraz);*/


class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
    this._ratings = [];
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}

/*const mamia = new CD('Mamia', 'lashes', ['oh my', 'somebody']);
console.log(mamia);
mamia.addRating(4);
mamia.addRating(16);
mamia.getAverageRating();*/

const historyOfEverythig = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toogleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();