function arrayMadness(a, b) {
  let sumA = 0
  let sumB = 0
  for (let i = 0; i < a.length; i++){
    sumA += a[i]**2
  }
  for (let i = 0; i < b.length; i++){
    sumB += b[i]**3
  }
  return sumA > sumB
}