function persistence(num) {
   let steps = 0
   while (String(num).length !== 1){
     num = String(num).split("").reduce((a, b) => a*+b)
     steps++
   }
  return steps
}