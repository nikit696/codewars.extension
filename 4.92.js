function digital_root(n) {
  while (n > 9){
    n = String(n).split("").reduce((a, b) => a+ +b, 0)
  }
  return n
}
console.log("1".toLowerCase())