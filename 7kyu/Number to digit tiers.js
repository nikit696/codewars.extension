function createArrayOfTiers(num) {
    num = String(num)
    let array = []
    for (let i = 1; i <= num.length; i++){
      array.push(num.slice(0, i))
    }
  return array
}