function narcissistic(value) {
  let arr = value.toString().split("")
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += Math.pow(arr[i], arr.length)
  }
  if (sum === value){
    return true
  } else {
    return false
  }
  // Code me to return true or false
}