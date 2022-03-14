function evenNumbers(array, number) {
  array = array.reverse().filter(a => a % 2 === 0)
  return array.slice(0, number).reverse()
  
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))