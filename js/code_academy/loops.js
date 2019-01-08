const bobsFollowers = ['mike', 'lisa', 'james', 'sandra'];

const tinasFollowers = ['mike', 'lisa', 'andrew'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {

      mutualFollowers.push(tinasFollowers[i]);

    }
  }
}

console.log(mutualFollowers);