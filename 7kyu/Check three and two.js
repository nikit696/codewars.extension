function checkThreeAndTwo(array) {
  let arrayA = array.filter(a => a === "a")
  let arrayB = array.filter(b => b === "b")
  let arrayC = array.filter(c => c === "c")
  array = [arrayA.length, arrayB.length, arrayC.length]
  return array.includes(3) && array.includes(2)
}