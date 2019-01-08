console.log('dsfd');

const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

const liveHoe = Object.assign({
  robot,
  'zygis': 'hoe'
});