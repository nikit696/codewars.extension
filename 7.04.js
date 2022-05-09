function findChildren(dancingBrigade) {
	dancingBrigade = dancingBrigade.toLowerCase().split("").sort()
  dancingBrigade[0] = dancingBrigade[0].toUpperCase()
  for (let i = 1; i < dancingBrigade.length - 1; i++){
    if (dancingBrigade[i + 1] !== dancingBrigade[i].toLowerCase()){
      dancingBrigade[i + 1] = dancingBrigade[i + 1].toUpperCase()
    }
  }
  return dancingBrigade.join("")
}