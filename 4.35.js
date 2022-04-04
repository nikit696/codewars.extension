function calculateYears(principal, interest, tax, desired) {
   let countYears = 0
   function calc(a,b,c){
       return a + (a * b * (1 - c))
   }
   if(principal < desired){
       countYears++
       principal = calc(principal, interest, tax)
   }
   return countYears
}
console.log(calculateYears(1000,0.05,0.18,1100))