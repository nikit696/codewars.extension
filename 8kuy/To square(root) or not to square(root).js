function squareOrSquareRoot(array) {
  return array.map(a => {
    if (Number.isInteger(Math.sqrt(a))){
      return Math.sqrt(a)
    } else {
      return a**2
    }
  })
}