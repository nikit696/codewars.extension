function sumOfIntegersInString(s){
  s = s.replace(/[^0-9]/g, " ").split(" ")
  return s.reduce((a, b) => +a + +b)
}