
function solve(s){
  return [s.match(/[A-Z]/g).length || 0, s.match(/[a-z]/g).length || 0, s.match(/[0-9]/g).length || 0, s.match(/[^\w]/g).length] || 0
}