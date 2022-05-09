function points(games) {
  let points = 0;
  for ( let i = 0; i < games.length; i++){
    let arrOfElem = games[i].split(":")
    if (arrOfElem[0] > arrOfElem[1]){
      points += 3
    } else if (arrOfElem[0] < arrOfElem[1]){
      points += 0
    } else {
      points += 1
    }
     
  }
  return points;
  // your code here
}