function countWins(winnerList, country) {
  return winnerList.reduce((acc, curr) =>{
    if (curr.country === country){
      acc++
      return acc
    } else {
      return acc
    }
  }, 0)
}
