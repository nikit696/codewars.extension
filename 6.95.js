var isSquare = function(arr){
  return arr.length === 0 ? undefined : arr.every(a => Math.sqrt(a) % 1 === 0) ? true : false
}