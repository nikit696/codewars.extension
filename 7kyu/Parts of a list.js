function partlist(arr) {
    let arr1 = []
    let arr2 = []
    for (let i = 1 ; i < arr.length; i++){
      arr1.push(`${arr.slice(0,i).join(" ")}`)
      arr1.push(`${arr.slice(i).join(" ")}`)
      arr2.push(arr1)
      arr1 = []
    }
  return arr2
}