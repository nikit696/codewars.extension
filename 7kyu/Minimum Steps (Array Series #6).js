function minimumSteps(numbers, value){
  numbers.sort((a, b) => a - b)
  let steps = 0, sum = numbers[0]
  for (let i = 1; i <= numbers.length; i++){
    if (sum >= value){
      return steps
    }
    sum += numbers[i]
    steps++
  }
}