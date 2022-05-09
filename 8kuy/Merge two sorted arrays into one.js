function mergeArrays(arr1, arr2) {
  arr1 = arr1.concat(arr2)
  return arr1.filter((a,b) => arr1.indexOf(a) === b).sort((a, b) => a - b)
 }