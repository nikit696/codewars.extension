function modifiedSum(a, n) {
    return a.reduce((acc,curr)=> acc + curr**n,0) - a.reduce((acc,curr)=>acc + curr,0)
  }