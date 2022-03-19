function squareArea(A){
  let radius = 4 * A / (2 * Math.PI)
  return Number((radius**2).toFixed(2))
}