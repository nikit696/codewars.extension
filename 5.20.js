function isVeryEvenNumber(n) {
  if (String(n).length === 1){
    return n % 2 === 0
  }
  return isVeryEvenNumber(String(n).split("").reduce((a, b) => a+ +b, 0))
}