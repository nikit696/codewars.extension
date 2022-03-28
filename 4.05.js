function getMissingElement(superArr){
  for (let i = 0; i < 10; i++){
    if (superArr.indexOf(i) === -1){
      return i
    }
  }
}