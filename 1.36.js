function sumArray(array) {
if (array == null || array.length === 0 || array.length === 1 ){
  return 0
}
  let sum = array.reduce(function(a, b){
  return a + b;
});
let max = Math.max(...array)
let min = Math.min(...array)
return (sum - max)- min
}