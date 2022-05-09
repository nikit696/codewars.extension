
function firstReverseTry(arr) {
  if (arr.length < 2){
    return arr 
  } else {
    let a = arr[0]
    let b = arr[arr.length - 1]
    let result = arr
    result[0] = b
    result[result.length - 1] = a
    return result
  }
}