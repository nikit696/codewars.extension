function drawStairs(n) {
  let string = "I"
  for (let i = 1; i < n; i++){
    string = string + "\n" + " ".repeat(i) + "I"
  }
  return string
}