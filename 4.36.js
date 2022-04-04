function factorial(n){
 let multiply = 1
 if (n < 0 || n > 12){
   throw new RangeError()
 } else {
   for (let i = 1; i <= n; i++){
     multiply *= i
   }
 }
  return multiply
}