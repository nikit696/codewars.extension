function getMiddle(s){
  let arr = s.split('')
  if (arr.length % 2 === 1){
    return arr[Math.floor(arr.length / 2)]
  }
  if (arr.length % 2 === 0){
    return arr[(arr.length / 2) - 1] + arr[arr.length / 2]
  }
  
  //Code goes here!
}