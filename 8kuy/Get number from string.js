function getNumberFromString(s) {
  return +s.replace(/[^\d]/gi, "")
}