function HQ9(code) {
  let string = ""
  for (let i = 99; i > 0; i--){
    if (i !== 1){
      string += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} ${i - 1 === 1 ? "bottle" : "bottles"} of beer on the wall.\n`
    } else {
      string += `${i} bottle of beer on the wall, ${i} bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
    }
  }
  return code === "H" ? "Hello World!" : code === "Q" ? code : code === "9" ? string : undefined 
}
console.log(HQ9("9"))