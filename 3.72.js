function whoseMove(lastPlayer, win) {
  return ((win === true && lastPlayer === "white") ||
         (win === false && lastPlayer === "black")) ? "white" : "black"
}