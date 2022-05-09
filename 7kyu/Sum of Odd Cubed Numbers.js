function cubeOdd(arr) {
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] !== "number"){
      return undefined
  }
    }
  return arr.reduce((a, b) => b % 2 === 1 || b % 2 === -1 ? a + Math.pow(b, 3) : a + 0, 0)
}