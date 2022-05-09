function pyramid(n) {
  let arr = []
  let massiv = [1]
  for (let i = 0; i < n; i++){
    arr.push(massiv)
    massiv = [1].concat(massiv)
  }
  return arr
  
  }