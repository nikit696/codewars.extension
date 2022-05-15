function partsSums(ls) {
    let arr = [ls.reduce((a,b) => a + b, 0)]
    for (let i = 0; i < ls.length; i++){
      arr.push(arr[i] - ls[i])
    }
    return arr
}