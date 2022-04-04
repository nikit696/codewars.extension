function calculateYears(principal, interest, tax, desired) {
    let countYears = 0
    function calcYear(a,b,c){
      countYears++
      a = a + (a * b * c)
    } 
    if (principal < desired){
      calcYear(principal,interest,tax)
    } else {
      return countYears
    }
}
console.log(calculateYears(1000, 0.05, 0.18, 1100))