function repeats(arr){
  let arr1 = arr.filter((item, index) => arr.indexOf(item) === index && arr.lastIndexOf(item) === index)
  return arr1.reduce((a,b) => a + b, 0)
};