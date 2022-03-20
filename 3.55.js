Math.roundTo = function (number, precision) {
  return +number.toFixed(precision)
}
console.log(Math.roundTo(1.234556,3))