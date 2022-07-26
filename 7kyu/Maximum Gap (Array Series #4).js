function maxGap (numbers){
    let result = 0
    numbers.sort((a,b) => a - b)
    for (let i = 0; i < numbers.length - 1; i++){
      result < numbers[i + 1] - numbers[i] ? result = numbers[i + 1] - numbers[i] : result
    }
    return result
  }