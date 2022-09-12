function save(sizes, hd) {
    let sum = 0
    for (let i = 0; i < sizes.length; i++){
      sum += sizes[i]
      if (sum > hd){
        return i
      }
    }
    return sizes.length
  }