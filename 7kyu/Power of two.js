function isPowerOfTwo(n){
  let initValue = 1;
  while (initValue < n)
    initValue *= 2;
  if (initValue == n)
    return true;
  return false;
}