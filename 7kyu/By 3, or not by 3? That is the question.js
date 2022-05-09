
function divisibleByThree(str){
 let array = str.split("")
 let sum = array.reduce((a,b) => a + +b, 0)
 return sum % 3 === 0
}