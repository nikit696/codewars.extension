function logicalCalc(array, op){
  return op === "AND" && array.includes(false) ? false : op === "OR" && !array.includes(true) ? false : op === "XOR" && !array.reduce((a,b) => a !== b) ? false : true 
}