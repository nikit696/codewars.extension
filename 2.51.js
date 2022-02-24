var capitals = function (word) {
	word = word.split("")
  let arr = []
  for (let i = 0; i < word.length; i++){
    if (word[i].toUpperCase() == word[i]){
      arr.push(i)
    }
  }
  return arr
};
