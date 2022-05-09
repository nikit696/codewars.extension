function nextHappyYear(year){
    year++
    for (;;year++){
    let a = String(year).split("")
    if (a.every((a,i,array) => array.indexOf(a) === i)){
      return +year
    }
  }
}