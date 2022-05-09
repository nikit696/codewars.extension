function keysAndValues(data){
  let array = [[], []]
  for (let key in data){
    array[0].push(key)
    array[1].push(data[key])
  }
  return array
}