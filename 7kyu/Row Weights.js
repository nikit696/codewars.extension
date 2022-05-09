function rowWeights(array){
  let weight1 = 0, weight2 = 0
  for (let i = 0; i < array.length; i++){
    if (i % 2 === 0){
      weight1 += array[i]
    } else {
      weight2 += array[i]
    }
  }
  return [weight1, weight2]
}