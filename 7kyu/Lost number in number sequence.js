function findDeletedNumber(arr, mixArr) {
  for (let i = 0; i < arr.length; i++){
    if (mixArr.indexOf(arr[i]) === -1){
      return arr[i]
    }
  }
  return 0
}