function solve(s){
 s = s.replace(/[^0-9]/g, " ").split(" ")
 return Math.max(...s)
};