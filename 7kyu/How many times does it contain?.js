
function stringCounter(inputS, charS){
  return inputS.split("").reduce((acc, curr) => curr === charS ? ++acc : acc, 0)
}