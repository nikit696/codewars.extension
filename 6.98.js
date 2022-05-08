function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++){
    for (let k = i; k < numbers.length; k++){
      if (numbers[i] + numbers[k] === target && i !== k){
        return [i,k]
      }
    }
  }
}