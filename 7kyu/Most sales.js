
function top3(products, amounts, prices) {
  let total = amounts.map((a, i) => a * prices[i])
  let arr = []
  for (;products.length !== 0;){
    let max = Math.max(...total)
    arr.push(products[total.indexOf(max)])
    products.splice(total.indexOf(max), 1)
    total.splice(total.indexOf(max), 1)
  }
  return arr.slice(0,3)
}