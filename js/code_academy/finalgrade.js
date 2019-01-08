function finalGrade(first, second, third) {
  const average = (first + second + third) / 3;

  if (first < 0 || first > 100 || second < 0 || second > 100 || third < 0 || third > 100) {
    return 'You have entered an invalid grade.';
  } else if (0 <= average && average <= 59) {
    return 'F'
  } else if (60 <= average && average <= 69) {
    return 'D'
  } else if (70 <= average && average <= 79) {
    return 'C'
  } else if (80 <= average && average <= 89) {
    return 'B'
  } else if (90 <= average && average <= 100) {
    return 'A'
  }

}





// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 70, 95)) // Should print 'A'