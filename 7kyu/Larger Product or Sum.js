
function sumOrProduct(array, n) {
  array.sort((a, b) => a - b)
  let sum = array.slice(-n).reduce((acc, curr) => acc + curr, 0)
  let product = array.slice(0,n).reduce((acc, curr) => acc * curr, 1)
  return sum > product ? "sum" : product > sum ? "product" : "same"
}