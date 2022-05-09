var Calculator = {
 average: function() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
   return isNaN(sum / arguments.length) ? 0 : (sum / arguments.length)
 }
};