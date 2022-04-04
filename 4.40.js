function sumTriangularNumbers(n) {
  let sum = 0
  for (let i = 1, k = 1; i <= n; i++, k += i){
  sum += k
}
  return sum
  }

