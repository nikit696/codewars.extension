function cutIt(arr){
  let length = arr[0].length
  for (let i = 1; i < arr.length; i++){
    if(arr[i].length < length ){
      length = arr[i].length
    }
  }
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].slice(0,length)
  } 
  return arr
}