function defineSuit(card) {
  let index = deck.indexOf(card)
  return index <= 12 ? "clubs" : index <= 25 ? "diamonds" : index <= 38 ? "hearts" : "spades"
}