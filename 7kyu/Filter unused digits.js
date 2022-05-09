
function unusedDigits() {
  let str = Array.from(arguments).reduce((acc, curr) => acc + curr, "")
  let total = ""
  for (let i = 0; i <= 9; i++){
    if(!str.includes(i)){
      total += i
    }
  }
  return total
}
