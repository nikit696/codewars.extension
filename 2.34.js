function stray(numbers) {
  numbers = numbers.sort((a, b) =>{return a- b})
  if (numbers[0] !== numbers[1]){
    return numbers[0]
  } else {
    return numbers[numbers.length - 1]
  }
}