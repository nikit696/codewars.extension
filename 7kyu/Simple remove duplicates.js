function solve(arr) {
  return arr.reverse().filter((item, index) => arr.indexOf(item) == index).reverse()
}