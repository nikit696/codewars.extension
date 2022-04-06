function alternateSqSum(arr){
  return arr.reduce((acc, curr, index) => (index + 1) % 2 === 1 ? acc + curr : acc + curr ** 2, 0) 
}