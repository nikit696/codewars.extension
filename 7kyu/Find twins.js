function elimination(arr){
    return arr.find(e => arr.indexOf(e) !== arr.lastIndexOf(e)) || null
   }