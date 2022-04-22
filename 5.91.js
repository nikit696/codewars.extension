function whatNumberIsIt(n){
  return n === Number.MAX_VALUE ? "Input number is Number.MAX_VALUE" 
        : n === Number.MIN_VALUE ? "Input number is Number.MIN_VALUE"
        : Number.isNaN(n) ? "Input number is Number.NaN"
        : n === -Infinity ? "Input number is Number.NEGATIVE_INFINITY"
        : n === Infinity ? "Input number is Number.POSITIVE_INFINITY"
        : `Input number is ${n}`  
}