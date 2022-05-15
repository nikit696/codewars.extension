function upArray(arr){
    if (arr.every((a) => a >= 0 && a < 10) && arr.length !== 0){
    arr = arr.reverse()
    let count = 1
    for (let i = 0; i < arr.length; i++){
      if(arr[i] + count === 10){
        arr[i] = 0
      } else {
        arr[i] += count
        count = 0
      }
    }
    if (count === 1){
      arr.push(1)
      return arr.reverse()
    } else {
      return arr.reverse()
    }
    } else {
      return null
    }
    }