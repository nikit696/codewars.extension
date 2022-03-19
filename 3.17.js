function tripleTrouble(one, two, three){
  one = one.split("")
  two = two.split("")
  three = three.split("")
  let str = ""
    for (let i = 0; i < one.length; i++){
    str = str + one[i] + two[i] + three[i]
  }
  return str
 }