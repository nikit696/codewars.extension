function halvingSum(n) {
    let divider = 1
    let sum = 0
    while (divider <= n){
      sum += Math.floor(n / divider)
      divider *= 2
    }
  return sum
}
