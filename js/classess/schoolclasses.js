class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;

  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }
  // setting the level 
  set level(lvl) {
    const levels = ['primary', 'middle', 'high'];

    if (typeof lvl === 'string') {
      lvl = lvl.toLowerCase();
      for (let i in levels) {
        if (lvl === levels[i]) {
          this._level = lvl;
          return this._level;
        } else {
          this._level = 'Please enter: Primary, Middle, High'
        }
      }
    } else {
      console.log('Please enter a string');
    }
  }

  set numberOfStudents(num) {
    if (typeof num === 'number' && (num >= 0)) {
      this._numberOfStudents = num
      return num;
    } else {
      console.log('Invalid input: must be set to a Number.');
    }
  }

  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`);

  }

  static pickSubstituteTeachers() {

    const substituteTeachers = ['Charlie', 'Suzie', 'pat'];
    const subIndex = Math.floor(Math.random() * (substituteTeachers.length - 1));

    return substituteTeachers[subIndex];
  }
}


/*const fin = new School('dfsdf', 'siddle', 'j');
//fin.numberOfStudents = -8;
//console.log(fin.numberOfStudents)
//fin.level ='high';
console.log(fin);
fin.quickFacts();
console.log(School.pickSubstituteTeachers());*/



// primary school class

class Primary extends School {
  constructor(name, numberOfStudents, level, pickupPolicy) {
    super(name);
    this._numberOfStudents = numberOfStudents;
    this._level = 'Primary'
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy
  }
}

// Middle school class

class Middle extends School {
  constructor(name) {
    super(name);
  }
}

// high school class

class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name);
    this._numberOfStudents = numberOfStudents;
    this._level = 'High';
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

/*const lorraineHansburry = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansburry.quickFacts();
console.log(School.pickSubstituteTeachers());*/

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
//alSmith.quickFacts();
alSmith.sportsTeams;