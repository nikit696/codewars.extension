var hotpo = function(n){
  let countSteps = 0
  while (n !== 1){
    countSteps++
    if(n % 2 === 0){
      n /= 2
    } else {
      n = 3 * n + 1
    }
    }
  return countSteps
}