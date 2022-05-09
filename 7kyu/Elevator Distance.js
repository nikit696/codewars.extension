
function elevatorDistance(array) {
  let sum = 0
  for (let i = 0; i < array.length - 1; i++){
    sum += Math.abs(array[i + 1] - array[i])
  }
  return sum
}