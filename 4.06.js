function menFromBoys(arr){
  let arrEven = []
  let arrOdd = []
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0 && arr.indexOf(arr[i]) === i){
      arrEven.push(arr[i])
    } else if ((arr[i] % 2 === 1 || arr[i] % 2 === -1 ) && arr.indexOf(arr[i]) === i){
      arrOdd.push(arr[i])
    } else {
      continue;
    }
  }
  arrEven.sort((a, b) => a - b)
  arrOdd.sort((a, b) => b - a)
  arr = arrEven.concat(arrOdd)
  return arr
  
}