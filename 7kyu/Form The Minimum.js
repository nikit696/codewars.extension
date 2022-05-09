function minValue(values){
  let arr = values.filter((item,index) => values.indexOf(item) === index)
  arr = arr.sort((a, b) => a - b)
  return +arr.join("")
}