
function liftoff(instructions){
  return instructions.sort((a, b) => b - a).reduce((acc,curr) =>{
    acc = acc + curr + " "
    return acc
  }, "") + "liftoff!"
}