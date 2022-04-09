function solution(digits){
  let max = 0
  for (let i = 0; i < digits.length - 4; i++){
    if (+digits.slice(i, i + 5) > max){
      max = +digits.slice(i, i + 5)
    }
  }
  return max
}