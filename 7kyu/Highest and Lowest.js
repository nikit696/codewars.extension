function highAndLow(numbers){
  let arr = numbers.split(" ");
  arr.sort(function(a,b){
    return a - b;
  });
  return arr[arr.length - 1] + " " + arr[0]
  // ..
}