function isPrime(num) {
 if (num < 2){
   return false
 }
  
 let n = Math.ceil(Math.sqrt(num))
 for (let i = 2; i <= n; i++){
   if (num % i === 0 && num != 2){
     return false
   }
 }
  return true
}