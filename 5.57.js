function eachCons(array, n) {
	let total = []
  for (let i = 0; i + n <= array.length; i++){
    total.push(array.slice(i, i + n))
  }
  return total
}