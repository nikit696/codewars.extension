function duplicateCount(text){
    let count = 0
    for (let i = 0; i < text.length; i++){
    let pattern = new RegExp(text[i], "gi")
      if (text.match(pattern).length > 1){
        count++
        text = text.replace(pattern, "")
      }
    }
    return count
    }
    console.log(duplicateCount("aabbccDE"))