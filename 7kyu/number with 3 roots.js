
function perfectRoots(n){
  for (let i = 0; i < 3; i++){
    if(Math.sqrt(n) % 1 === 0){
      n = Math.sqrt(n)
      continue
    } else {
      return false
    }

  }
  return true
} 