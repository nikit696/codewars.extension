function squaresOnly(array) {
  return array.filter(a => Number.isInteger(Math.sqrt(a)))
}