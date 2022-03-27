function largestPairSum (numbers) {
  numbers = numbers.sort((a, b) => a - b)
  let a = numbers.length - 1
  return numbers[a] + numbers[a - 1]
}