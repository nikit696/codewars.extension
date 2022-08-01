function arrayLeaders(numbers){
    let array = []
    for (let i = 0; i < numbers.length - 1; i++){
      if (numbers.slice(i + 1).reduce((a,b) => a + b, 0) < numbers[i]){
       array.push(numbers[i])
      }
    }
    if (numbers[numbers.length - 1] > 0){
      array.push(numbers[numbers.length - 1])
    }
    return array
  }