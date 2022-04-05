function mergeArrays(a, b) {
  let mergeArray = []
  for (let i = 0; i < Math.max(a.length, b.length); i++){
    if (a[i] !== undefined && b[i] !== undefined){
       mergeArray.push(a[i])
    mergeArray.push(b[i])
    } else if (a[i] === undefined){
      mergeArray.push(b[i])
    } else if (b[i] === undefined){
      mergeArray.push(a[i])
    } else {
      continue;
    }
   }
  return mergeArray
}