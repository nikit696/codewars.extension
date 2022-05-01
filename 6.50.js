function findMissing(arr1, arr2) {
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++){
    if (arr1[i] !== arr2[i]){
      if (arr1.length < arr2.length){
        return arr2[i]
      } else {
        return arr1[i]
      }
    }
  }
}
