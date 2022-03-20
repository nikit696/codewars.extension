function cutCube(volume,n){
  let a = Math.cbrt(volume), b = Math.cbrt(volume / n)
  return (Number.isInteger(a) && Number.isInteger(b))
  
}