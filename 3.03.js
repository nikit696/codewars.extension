function closeCompare(a, b, margin){
  if (margin == undefined){
    if (a > b){
      return 1
    } else if (a < b) {
      return -1
    } else {
      return 0
    }
  }
  return (margin != undefined && Math.abs(a - b) <= margin) ? 0 
        :(a < b) ? -1
        : 1
}