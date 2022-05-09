function SeriesSum(n)
{
  let s = 0, i = 0, n1 = 1
  while (i < n){
    s += 1 / n1
    i++
    n1 += 3
  }
    return s.toFixed(2)
}