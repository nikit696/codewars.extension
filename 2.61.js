function solve(s){
    let countUpper = 0, countLower = 0
    for (let i = 0; i < s.length; i++){
      if (s[i] === s[i].toLowerCase()){
        countLower++
      } else {
        countUpper++
      }
    }
  return (countLower >= countUpper) ? s.toLowerCase() : s.toUpperCase()
}