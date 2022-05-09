
function toCurrency(price){
  price = (price + "").split("").reverse()
  let string = []
  for (let i = 0; i < price.length; i += 3){
    if (i + 3 < price.length){
      string = string.concat(price.slice(i, i + 3)).concat([","])
      } else {
        string = string.concat(price.slice(i, i + 3))
      }
  }
  return string.reverse().join("")
}