function winner(deckSteve, deckJosh) {
    let arrayCard = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
    let pointSteve = 0, pointJosh = 0
    for (let i = 0; i < deckSteve.length; i++){
      arrayCard.indexOf(deckSteve[i]) > arrayCard.indexOf(deckJosh[i]) ? pointSteve++
      : arrayCard.indexOf(deckJosh[i]) > arrayCard.indexOf(deckSteve[i]) ? pointJosh++
      : 0
    }
    return pointSteve > pointJosh ? `Steve wins ${pointSteve} to ${pointJosh}`
          : pointJosh > pointSteve ? `Josh wins ${pointJosh} to ${pointSteve}`
          : `Tie`
  }