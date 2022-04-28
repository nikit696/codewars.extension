function mostFrequentItemCount(collection) {
  let object = collection.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
}, {});
  let max = 0
  for (let key in object){
    if(object[key] > max){
      max = object[key]
    }
  }
  return max
  }