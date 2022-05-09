
function findSum(){
  let total = 0
  for (let i = 0; i < arguments.length; i++){
    if (arguments[i] < 0){
      return -1
    } else {
      total += arguments[i]
    }
  }
  return total
}