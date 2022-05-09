function multiTable(number) {
  let string = ""
  for (let i = 1; i <= 10; i++){
    let result = i * number
    if (i !== 10){
      string += `${i} * ${number} = ${result}\n`
} else {
  string += `${i} * ${number} = ${result}`
}
    }
  return string
  }