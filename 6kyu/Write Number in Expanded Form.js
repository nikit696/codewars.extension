function expandedForm(num) {
    num = num + ""
    let str = num[0] + "0".repeat(num.length - 1)
    for (let i = 1; i < num.length; i++){
      if (num[i] !== "0"){
      str = str + " + " + num[i] + "0".repeat(num.length - i - 1)
      } else {
        continue
      }
      }
    return str
  }