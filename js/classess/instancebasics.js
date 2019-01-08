class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
console.log(surgeonCurry);

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
console.log(surgeonDurant);