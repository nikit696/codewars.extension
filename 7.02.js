function kebabize(str) {
    str = str.replace(/\d/g, "")
    return str.split("").map((curr, index)=> {
      return curr.toUpperCase() === curr ? 
      `${index !== 0 ? "-" : ""}${curr.toLowerCase()}`
      : curr
    }).join('')
  }
            