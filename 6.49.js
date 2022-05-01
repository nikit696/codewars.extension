function removeRotten(bagOfFruits){
  if (bagOfFruits === null || bagOfFruits === undefined || bagOfFruits.length === 0){
    return []
  }
  return bagOfFruits.map((a) =>{
    if(/rotten/.test(a)){
      a = a.replace(/rotten/, "")
    }
    return a.toLowerCase()
  })
}