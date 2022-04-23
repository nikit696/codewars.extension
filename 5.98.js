function nextHappyYear(year){
  year += ""
    if (year.split("").every((a, i, arr) => arr.indexOf(a) === i)){
    return +year
  } 
    return nextHappyYear(year++)
}
console.log(nextHappyYear(1003))