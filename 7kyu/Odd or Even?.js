function oddOrEven(array) {
  if (array.length === 0){
    return "even"
  }
  let total = array.reduce(function(a, b){
    return a + b;
  })
  if (total % 2 === 0){
    return "even"
  } else {
    return "odd"
  }
   //enter code here
}