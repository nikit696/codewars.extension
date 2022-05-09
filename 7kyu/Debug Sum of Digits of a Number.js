function getSumOfDigits(integer) {
  let sum = 0;
  let  digits =  Math.floor(integer).toString();
  for(var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}