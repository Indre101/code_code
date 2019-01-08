const _ = {
  // chooses between upper and lower bound, always stays between those bounds
  clamp(number, number2, number3) {
    let lowerClampedValue = Math.max(number, number2);
    let clampedValue = Math.min(lowerClampedValue, number3);
    return clampedValue;

    //return _.clamp(number, number2, number3);
    //return number
  },
  // checks the inrange method,
  inRange(number, start, end) {
    if (typeof end === "undefined" || end === null) {
      end = start;
      start = 0;
    } else if (start >= end) {
      let temp = end;
      end = start;
      start = temp;
    }

    let isInRange = true;
    if (start <= number && number <= end) {
    } else {
      isInRange = false;
    }
    return isInRange;
  },

  words(string) {
    const newArr = string.split(" ");
    return newArr;
  },

  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    //  else{
    let space = " ";
    const startPaddingLength = Math.floor((length - string.length) / 2); //2
    let endPaddingLength = length - string.length - startPaddingLength;

    const paddedString =
      space.repeat(startPaddingLength) +
      string +
      space.repeat(endPaddingLength);
    return paddedString;
    //  }
  },

  has(object, key) {
    //  console.log(object.key);
    /* if (object[key] === undefined ){
       return false
     } else {
       return true
     }*/

    let hasValue = object[key] === undefined ? false : true;
    return hasValue;
  },

  invert(object) {
    let invertedObject = {};

    for (let i in object) {
      let originalValue = object[i];
      invertedObject[originalValue] = i;
    }
    return invertedObject;
  },

  findKey(object, predicate) {
    for (let i in object) {
      let value = object[i];
      let predicateReturnValue = predicate(value);

      if (predicateReturnValue) {
        return object[i];
      } else {
        return false;
      }
    }
    return undefined;
  },
  drop(array, number) {
    let newArray = [];
    if (number) {
      newArray = array.splice(number);
    } else {
      newArray = array.splice(1);
    }
    return newArray;
  },
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex(
      (element, index) => !predicate(element, index, array)
    );
    const droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size) {
    let tempArray = [];

    for (let i = 0; i < array.length; i += size) {
      let myChunk = array.slice(i, i + size);
      tempArray.push(myChunk);
    }
    return tempArray;
  }
};

//console.log(_.numberOfTwo(1,3,2));

// Do not write or modify code below this line.
module.exports = _;
