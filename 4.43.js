function maxTriSum(numbers){
  numbers = numbers.sort((a, b) => b - a).filter((item, index) => numbers.indexOf(item) === index)
  return numbers[0] + numbers[1] + numbers[2]
}