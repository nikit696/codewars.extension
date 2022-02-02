var uniqueInOrder=function(iterable){
    var array = []
    for (var i = 0; i < iterable.length; i++){
      if (iterable[i] !== iterable[i + 1]){
        array.push(iterable[i])
      }
    }
    return array
    //your code here - remember iterable can be a string or an array
  }