function sum(){
  let sum = 0
  for (let i = 0; i < arguments.length; i++){
    typeof arguments[i] === "number" && Number.isInteger(arguments[i])? sum += arguments[i] : 0
  }
  return sum
}