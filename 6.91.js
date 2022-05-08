function generatePairs(n) {
  let arr = []
  for (let i = 0; i <= n; i++){
    for(let k = i; k <= n; k++){
      arr.push([i,k])
    }
  }
  return arr
}