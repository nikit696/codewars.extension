function lastSurvivor(letters, coords) {
 letters = letters.split("")
 for (let i = 0; letters.length > 1; i++){
   letters.splice(coords[i], 1)
}
  return letters.join("")
}