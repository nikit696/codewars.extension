function calculate(str) {
  
    let newNumberStr = str.match(/[0-9]+/g)
    let newPlusMinusStr = str.match(/minus|plus/g)
    let total = +newNumberStr[0]
    for (let i = 1; i < newNumberStr.length; i++){
      if (newPlusMinusStr[i - 1] === "plus"){
        total += Number(newNumberStr[i])
      } else {
        total -= Number(newNumberStr[i])
      }
    }
     return total + ""
  }
console.log("1plus2plus3plus4".match(/plus|minus/g))
console.log("1plus2plus3plus4".match(/[0-9]/g))