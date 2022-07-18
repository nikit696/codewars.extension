function isNarcissistic(n) {
    return n === String(n).split("").map(Number).reduce((acc,curr,_,array)=>{
      acc = acc + curr**array.length
      return acc
    },0)
  }