reverse = function(array) {
  return array.map((item,index,array) => array[array.length - 1 - index])
}