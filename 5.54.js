function roundIt(n){
  let length1 = n.toString().split('.').shift().length, length2 = n.toString().split('.').pop().length
  return length1 < length2 ? Math.ceil(n) : length1 > length2 ? Math.floor(n) : Math.round(n)
  
}