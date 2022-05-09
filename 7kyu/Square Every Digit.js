function squareDigits(num){
  let array = num.toString().split("")
  for (let i = 0; i < array.length; i++){
    array[i] = Math.pow(array[i], 2)
    
  }
  return Number(array.join(""))
}