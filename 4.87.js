function vowelIndices(word){
  word = word.split("")
  let count = []
  for (let i = 0; i < word.length; i++){
    if (/[aeiuoy]/i.test(word[i])){
      count.push(i + 1)
    }
    }
  return count
  }