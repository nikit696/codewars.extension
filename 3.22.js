function nextId(ids){
  ids = ids.sort((a,b) => a - b)
  for (let i = 0; i <= ids[ids.length - 1]; i++){
    if (ids.indexOf(i) === -1){
      return i
    }
  }
  return ids[ids.length - 1] + 1
}