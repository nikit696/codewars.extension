function longest(words) {
  return Math.max(...(words.map(a => a.length)))
}