var lengthOfSequence = function (arr, n) {
    let count = 0 
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === n){
        count++
      } else {
        continue
      }
    }
    if (count > 2 || arr.length === 1){
      return 0
    } else {
      return arr.slice(arr.indexOf(n), arr.lastIndexOf(n) + 1).length
    }
    }