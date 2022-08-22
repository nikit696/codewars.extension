function smallestProduct(arr) {
    let array = arr.map((curr) => curr.reduce((a,b) => a * b, 1))
    return Math.min(...array)
    
    }