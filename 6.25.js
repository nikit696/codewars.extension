function startingMark(bodyHeight){
  let a = (10.67 - 9.45)/(1.83 - 1.52)
  return +(10.67 + a * bodyHeight - a * 1.83).toFixed(2)
}