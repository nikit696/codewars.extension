function splitAndMerge(string, separator) {
  string = string.split(" ")
  let arr = string.map((item, index) => string[index].split("").join(separator))
  return arr.join(" ")
  }