function filter_list(l) {
  let arr = []
  for (let i = 0; i < l.length; i++){
    if(Number.isInteger(l[i]) === true){
      arr.push(l[i])
    }
  }
  return arr;
  // Return a new array with the strings filtered out
}