function letterCount(s){
    let obj = s.split("").reduce((acc,curr)=>{
    acc[curr] ? acc[curr]++ : acc[curr] = 1
    return acc
    }, {})
    return obj
  }