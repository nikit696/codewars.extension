function solve(s){
 let array = s.match(/[aeoiu]+/g).map((a) => a.length)
 return Math.max(...array)
 
}