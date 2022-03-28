function shifter(s){
  let shiftArr = ["H", "I", "N", "O", "S", "X", "Z", "M", "W"]
  s = s.split(" ")
  let arr = s.filter((a, i) => /^[HINOSXZMW]+$/.test(a) && s.indexOf(a) === i)
  return arr.length
}