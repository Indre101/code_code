class School {
  constructor(name, level, numberOfStudents, testScores) {
    this._level = level;
    this._name = name;
    this._numberOfStudents = numberOfStudents;
    this._testScores = testScores;
  }

  get testScores() {
    return this._testScores;
  }

  calculateAverageTestScores() {

    const average = this.testScores.reduce((accumulator, currentValue) => (accumulator + currentValue)) / this.testScores.length;
    console.log(average);

  }

  get level() {
    return this._level;
  }

  get name() {
    return this._name;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  // chechking value is a number
  set numberOfStudents(num) {
    if (isNaN(num)) {
      console.log('Invalid input: must be set to a Number.');
    } else {
      this._numberOfStudents = num;
    }
  }
  static pickSubstituteTeacher(teacher) {
    const randIndex = Math.floor(Math.random() * (teacher.length - 1))
    return teacher[randIndex];
  }

  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`);

  }

}
const nh = new School('fsdf', 'dsf', 123, [4, 7, 8, 9, 2, 56]);
// calling a static method
////const naujasM = School.pickSubstituteTeacher(['sd', 'dfd', 'dfd', 'dgd']);
//console.log(naujasM);
//nh.numberOfStudents = 123; testing if the numberof students pasing the condition
console.log(nh);
nh.calculateAverageTestScores();

// primary school class 

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy, testScores) {
    super(name, 'Primary', numberOfStudents, testScores);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }

}

// middle school class 
class Middle extends School {
  constructor(name, numberOfStudents, testScores) {
    super(name, 'Middle', numberOfStudents, testScores);
  }
}
// test for middle school 
//const hnh = new Middle('nhn', 123);
//console.log(hnh);
//hnh.quickFacts();

// class High school 

class High extends School {
  constructor(name, numberOfStudents, sportsTeams, testScores) {
    super(name, 'High', numberOfStudents), testScores;
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }

}

const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts();

const newTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(newTeacher);

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);