function findNextSquare(sq) {
  if (sq <= 0 || Number.isInteger(Math.sqrt(sq)) === false ){
    return -1
  }
  
  // Return the next square if sq is a perfect square, -1 otherwise
  return Math.pow(Math.sqrt(sq) + 1, 2);
}