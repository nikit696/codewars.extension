function productArray(numbers){
    let array = []
    let prod = numbers.reduce((a, b) => a * b, 1)
    for (let i = 0; i < numbers.length; i++){
      array.push(prod / numbers[i])
    }
    return array
  }