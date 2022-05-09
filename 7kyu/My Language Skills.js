function myLanguages(results) {
  let array = []
  for (let key in results){
  if (results[key] >= 60){
    array.push(key)
  } else {
    continue;
  }
  }
  array.sort((a, b) => results[a] < results[b] ? 1 : -1)
  return array
}