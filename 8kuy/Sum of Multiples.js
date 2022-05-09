
function sumMul(n,m){
if (n <= 0 || m <= 0){
  return "INVALID"
}
let diff = n
let sum = 0
while (n < m){
  sum += n
  n += diff
}
  return sum
}