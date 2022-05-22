function validate(n){
    n = String(n).split("")
    let a = n.length % 2 === 1 ? n.map((item,index)=> index % 2 === 1 ? item * 2 : +item) : n.map((item,index)=> index % 2 === 0 ? item * 2 : +item) 
    let b = a.map((item,index)=> item > 9 ? item - 9 : item)
    return b.reduce((acc,curr) => acc + +curr, 0) % 10 === 0
  }