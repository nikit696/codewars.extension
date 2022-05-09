function inviteMoreWomen(L) {
  let countMen = 0, countWomen = 0;
  for (let i = 0; i < L.length; i++){
    if (L[i] === 1){
      countMen++
    } else {
      countWomen++
    }
  }
  return countWomen < countMen
  
}