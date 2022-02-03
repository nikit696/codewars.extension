function expressionMatter(a, b, c) {
  let i1 = a * (b + c), i2 = a * b * c, i3 = a + (b * c), i4 = (a + b) * c, i5 = a + b + c
  return Math.max(i1,i2,i3,i4,i5)// highest achievable result
}