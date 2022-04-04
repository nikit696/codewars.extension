function largest(n,xs){
    xs.sort((a, b) => a - b)
    return n === 0 ? [] : xs.slice(-n)
}