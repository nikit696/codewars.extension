function divCon(x){
    let divConNumber = x.filter(a => typeof a === "number")
    let divConString = x.filter(a => typeof a === "string").map(Number)
    return divConNumber.reduce((acc,curr) => acc + curr, 0) - divConString.reduce((acc,curr) => acc + curr, 0)
    }