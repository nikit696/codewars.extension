function digPow(n, p){
  let arr = n.toString().split("")
  let sum = 0
  for (let i = 0; i < arr.length; i++ , p++){
    sum += Math.pow(arr[i], p)
  }
  if (sum % n === 0){
    return sum / n
  } else {
    return -1
  }
  // ...
}