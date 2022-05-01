function isFlush(cards) {
  let suit = cards[0].match(/[HSCD]/)
  for (let i = 1; i < cards.length; i++){
    if (!cards[i].includes(suit)){
      return false
    }
  }
  return true
}