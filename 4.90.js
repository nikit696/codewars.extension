function towerBuilder(nFloors) {
  let str = "*".repeat(nFloors * 2 - 1)
  let arr = []
  for (let i = 0; i < nFloors; i++){
    arr.unshift(str)
    str = str.replace(/\*$/g, " ")
  }
  return arr
}
console.log(towerBuilder(3))