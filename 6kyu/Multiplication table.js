multiplicationTable = function(size) {
    let arr = []
    for (let k = 1; k <= size; k++){
      let ar = []
      for (let i = 1; i <= size; i++){
        ar.push(i * k)
      }
      arr.push(ar)
    }
    return arr
  }
  