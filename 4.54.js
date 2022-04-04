function specialNumber(n){
  return /^[012345]+$/.test(String(n)) ? 'Special!!' : "NOT!!"
}