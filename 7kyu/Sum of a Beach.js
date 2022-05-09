function sumOfABeach(beach) {
  return beach.match(/water|sand|fish|sun/gi) ? beach.match(/water|sand|fish|sun/gi).length : 0
}
