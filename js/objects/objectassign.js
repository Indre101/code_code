const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};



// Declare newRobot below this line:
const newRobot = Object.assign({
  robot,
  laserBlaster: true,
  voiceRecognition: true
});

console.log(newRobot);