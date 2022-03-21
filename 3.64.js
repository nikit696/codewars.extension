function numberToPower(number, power){
  if (power === 0){
    return 1
  }
  let n = number
  for (let i = 1; i < power; i++){
    number *= n
  }
  return number
}