function array(arr){
  if (arr.length < 5){
    return null
  }
  arr = arr.split(",")
  arr.shift()
  arr.pop()
  arr =  arr.join(" ")
  return (arr.length === 0) ? null : arr
}