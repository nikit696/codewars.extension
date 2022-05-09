function alphabetWar(fight){
  let sumR = 0
  let sumL = 0
  let armyL = ["s", "b", "p", "w"], armyR = ["z", "d", "q", "m"]
  for (let i = 0; i < fight.length; i++){
     if (armyL.indexOf(fight[i]) !== -1){
       sumL = sumL + armyL.indexOf(fight[i]) + 1
     } else if (armyR.indexOf(fight[i]) !== -1){
       sumR = sumR + armyR.indexOf(fight[i]) + 1
     } else {
       continue;
     }
   }
  if (sumR > sumL){
    return "Right side wins!"
  } else if (sumR < sumL){
    return "Left side wins!"
  } else {
    return "Let's fight again!"
  }
}