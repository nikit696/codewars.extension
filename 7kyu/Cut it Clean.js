var cut = function(len, num) {
  let n = Math.floor(len / num)
  let remainder = len % num
  let arr = []
  for (let i = 0; i < num; i++){
    arr.push(n)
  }
  for (let i = 1; i <= remainder; i++){
    arr[i]++
  }
  return arr
}