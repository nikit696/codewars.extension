function stringy(size) {
  let string = ""
  for (let i = 1; i <= size; i++){
    if(i % 2 === 1){
      string += "1"
  } else {
    string += "0"
  }
  }
  return string
  }