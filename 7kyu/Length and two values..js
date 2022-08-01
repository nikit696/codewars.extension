function alternate(n, firstValue, secondValue){
    let array = []
    for (let i = 1; i <= n; i++){
      if (i % 2 === 1){
        array.push(firstValue)
      } else {
        array.push(secondValue)
      }
    }
    return array
  }