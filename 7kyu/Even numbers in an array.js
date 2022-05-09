function evenNumbers(array, number) {
  array = array.reverse().filter(a => a % 2 === 0)
  return array.slice(0, number).reverse()
  
}