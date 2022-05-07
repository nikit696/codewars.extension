function isNegativeZero(n) {
 return  Object.is(n, -0) && 1/n === -Infinity
}