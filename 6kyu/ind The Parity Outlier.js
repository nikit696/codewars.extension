function findOutlier(integers){
    let countOdd = 0;
    let countEven = 0;
    for (let i = 0; i < integers.length; i++){
      if (integers[i] % 2 === 0){
        countEven++
      } else {
        countOdd++
      }
      }
    if (countOdd === 1){
    for (let i = 0; i < integers.length; i++){
      if (integers[i] % 2 === 1 || integers[i] % 2 === -1){
        return integers[i]
      }
      }
      }
    if (countEven === 1){
      for (let i = 0; i < integers.length; i++){
      if (integers[i] % 2 === 0){
        return integers[i]
      }
    }
    }
    }