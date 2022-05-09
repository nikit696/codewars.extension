
function correctness(bobsDecisions, expertDecisions) {
  let count = 0
  for (let i = 0; i < bobsDecisions.length; i++){
    bobsDecisions[i] === expertDecisions[i] ? count++ 
    : bobsDecisions[i] === "?" || expertDecisions[i] === "?" ? count += 0.5
    : count
  }
  return count
}