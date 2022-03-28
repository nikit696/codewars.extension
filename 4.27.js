function min(a, b){
  a = a === null ? 0 : a
  b = b === null ? 0 : b
  return (isNaN(a) || isNaN(b)) ? NaN : (a<b)?a:b;
}