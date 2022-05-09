function calculateYears(principal, interest, tax, desired) {
   let countYears = 0
   while(principal < desired){
     countYears++
     principal = principal + (principal * interest * (1 - tax))
   }
  return countYears
}