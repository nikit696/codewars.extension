function multiply(number){
  let length = String(Math.abs(number)).length
  return number * Math.pow(5, length)
}