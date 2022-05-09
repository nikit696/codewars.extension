function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false
  }
  for (let i = 0; arr1.length > 0 || arr2.length > 0;){
    if (arr2.indexOf(arr1[0]) !== -1){
      arr2.splice(arr2.indexOf(arr1[0]), 1)
      arr1.splice(0,1)
    } else {
      return false
    }
  }
  if (arr1.length > 0 || arr2.length > 0){
    return false 
  } else {
    return true
  }
}