var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  return (humanYears === 1) ? [1,15,15]
        :(humanYears === 2) ? [2,24,24]
        : [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5]
}