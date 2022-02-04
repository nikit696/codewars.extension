function descendingOrder(n){
  let a = n.toString().split("").sort(function(a,b){return b - a}).join("")
  return Number(a)//...
}