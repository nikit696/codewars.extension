function wordValue(a) {
  let alphabet = ' abcdefghijklmnopqrstuvwxyz'
  let newA = a.map((item, index) =>{
    item = item.split("")
    return item.reduce((a, b) => a + (alphabet.indexOf(b)), 0) * (index + 1)
  })
  return newA
}