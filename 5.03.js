function digitize(n) {
 n = String(n).split("")
  return n.map(Number)
}
console.log('abcdefghijklmnopqrstuvwxyz'.split("").reverse().join(""))