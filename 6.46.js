const sumAverage = (arr) => {
  let arrayOfAverages = arr.map((a) => a.reduce((acc,curr) => acc + curr, 0) / a.length) 
  return Math.floor(arrayOfAverages.reduce((acc, curr) => acc + curr, 0))
}