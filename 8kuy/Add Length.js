function addLength(str) {
 str = str.split(" ")
  let arr = str.map(a => `${a} ${a.length}`)
  return arr
}