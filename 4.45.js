function multiples(m, n){
  let array = []
  for (let i = 1; i <= m; i++){
    array.push(n * i)
  }
  return array
}