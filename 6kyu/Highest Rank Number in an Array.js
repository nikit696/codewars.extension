function highestRank(arr){
    let obj = arr.reduce((acc,curr)=>{
    if (acc.hasOwnProperty(curr)){
      acc[curr]++
    } else {
      acc[curr] = 1
    }
      return acc
    }, {})
    return +Object.entries(obj).reduce((acc,curr) => acc[1] > curr[1] ? acc : curr)[0]
  }