function createPhoneNumber(numbers){
    let string = "("
    for (let i = 0; i < numbers.length; i++){
      if (i === 2){
        string += numbers[i] + ")" + " "
      } else if (i === 5){
        string += numbers[i] + "-"
      } else {
        string += numbers[i]
      }
    }
    return string
  }