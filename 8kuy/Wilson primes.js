function amIWilson(P) {
  let factorial = 1
  for (let i = 1; i <= (P - 1); i++){
    factorial *= i
  }
  var a = (factorial + 1) / (P * P);
  return Number.isInteger(a)
}