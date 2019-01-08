const howOld = (age, year) => {
  const yearNow = 2018;
  const diference = yearNow - year;
  const newAge = age - diference;

  // in the future
  if (year > yearNow) {
    return (`You will be ${year-yearNow+age} in the year ${year}`)
  }
  // in the past but not before the person was born
  else if ((year < yearNow) && (newAge < 0)) {
    return (`The year ${year} was ${((yearNow-age)-year)} years before you were born`);
  } else if (year < yearNow && diference > 0) {
    return `You were ${age -diference} in the year ${year}`
  }
}

console.log(howOld(29, 1980));