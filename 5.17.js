function differenceOfSquares(n){
  let sumSquareOfSum = 0, sumOfSquares = 0
  for (let i = 1; i <= n; i++){
    sumSquareOfSum += i
    sumOfSquares += i**2
  }
  return Math.abs(sumSquareOfSum ** 2 - sumOfSquares)
}