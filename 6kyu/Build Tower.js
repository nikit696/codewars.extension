function towerBuilder(nFloors) {
  let str = "*".repeat(nFloors * 2 - 1)
  let arr = []
  for (let i = 0; i < nFloors; i++){
    arr.unshift(str)
    str = str.replace(/\*/, " ")
    str = str.split("").reverse().join("").replace(/\*/, " ").split("").reverse("").join("")
  }
  return arr
}