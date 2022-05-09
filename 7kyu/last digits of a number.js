function lastDigit(n, d) {
  n = String(n).split("").map(Number)
  if (n.length <= d){
    return n
  }
  if (d <= 0){
    return []
  }
  return n.slice(-d)
}