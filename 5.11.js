function evenOrOdd(str) {
  str = str.split("")
  let sumOdd = str.reduce((a, b) => a + (+b % 2 === 1 ? +b : 0), 0)
  let sumEven = str.reduce((a, b) => a + (+b % 2 === 0 ? +b : 0), 0)
  return sumOdd > sumEven ? "Odd is greater than Even" : sumEven > sumOdd ? "Even is greater than Odd" : "Even and Odd are the same"
}