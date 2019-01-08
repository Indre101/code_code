const robot = {
  model: '1E78V2',
  energyLevel: {
    high: 'on',
    speed: 'you'
  },
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};


//const functionality = robot.functionality;
const {
  functionality
} = robot;


const {
  high
} = robot.energyLevel;


console.log(high);

functionality.beep();

functionality.fireLaser();

