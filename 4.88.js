function persistence(num) { 
  let mult = 1
  if (num < 10){
    return steps
  } else {
    num = String(num).split("")
    for (let i = 0; i < num.length; i++){
      mult *= +num[i]
    }
  }
  steps++
  if (mult < 10){
    return steps
  } else {
    return persistence(mult)
  }
  
}
