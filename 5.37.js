function stairsIn20(s){
  let total = 0
  for (let i = 0; i < s.length; i++){
  total += s[i].reduce((a, b) => a + b, 0)
}
  return total * 20
}