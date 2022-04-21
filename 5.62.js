function sameCase(a, b){
  return ((a === a.toLowerCase() && b === b.toLowerCase()) || (a === a.toUpperCase() && b === b.toUpperCase())) && /[a-z]/i.test(a) && /[a-z]/i.test(b) ? 1
        : ((a === a.toUpperCase() && b === b.toLowerCase()) || (a === a.toLowerCase() && b === b.toUpperCase())) && /[a-z]/i.test(a) && /[a-z]/i.test(b) ? 0 
        : -1
}
