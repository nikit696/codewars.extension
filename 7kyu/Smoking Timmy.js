function startSmoking(bars,boxes){
    let sum = bars * 10 * 18 + boxes * 18
    for (let i = bars * 10 * 18 + boxes * 18; i >= 5;){
      sum += Math.floor(i / 5)
      i = Math.floor(i / 5) + i % 5
    }
    return sum
  }