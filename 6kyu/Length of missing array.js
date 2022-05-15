function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0){
      return 0
    }
    let arrayOfLengths = arrayOfArrays.map(a => a === null || !a.length ? false : a.length)
    if (arrayOfLengths.includes(false)){
      return 0
    }
    for (let i = Math.min(...arrayOfLengths); i < Math.max(...arrayOfLengths); i++){
      if (!arrayOfLengths.includes(i)){
        return i
      }
    }
  }
  