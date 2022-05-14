function duplicateEncode(word){
    let str = '';
    word = word.toLowerCase();
      for (let i=0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
          str += "(";
        } else {
          str += ")";
        }
      }
      return str
  }