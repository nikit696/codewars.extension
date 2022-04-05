function maxProduct(numbers, size){
  numbers.sort((a, b) => b - a)
  let multiply = 1
  for (let i = 0; i < size; i++){
    multiply *= numbers[i]
  }
  return multiply
}