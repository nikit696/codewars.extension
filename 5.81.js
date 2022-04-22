function isVow(a){
  let arr = ["a", "e", "i", "o", "u"].map(a => a.charCodeAt(0))
  return a.map(a => arr.includes(a) ? String.fromCharCode(a) : a)
}