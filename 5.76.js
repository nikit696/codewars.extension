function twoHighest(arr) {
  arr = arr.filter((a, i) => arr.indexOf(a) === i).sort((a, b) => b - a)
  return arr.length > 1 ? [arr[0], arr[1]] : arr.length === 1 ? [arr[0]] : []
}