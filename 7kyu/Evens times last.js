function evenLast(numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i += 2){
    if (Number.isInteger(numbers[i])){
      sum = sum + numbers[i] * numbers[numbers.length - 1]
    }
  }
  return sum
}