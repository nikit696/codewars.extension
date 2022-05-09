
function amountOfPages(sum){
  let a = 0;
  while (sum > 0) {
    sum -= `${++a}`.length;
  }
  return a;
}