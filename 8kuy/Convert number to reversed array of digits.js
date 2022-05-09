
function digitize(n) {
  return (n + "").split("").reverse().map(Number)
}

function digitize(n){
  n += ""
  let arr = []
  for (let i = n.length - 1; i >= 0; i--){
    arr.push(+n[i])
  }
  return arr
}
function digitize(n) {
  n = n.toString().split("").reverse()
  for (let i = 0; i < n.length; i++){
    n[i] = Number(n[i])
  }
  return n
  //code here
}