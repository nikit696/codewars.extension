function sumSquares(array) {
  let sum = array.reduce((a, b) => a + b ** 2, 0)
  return sum
}