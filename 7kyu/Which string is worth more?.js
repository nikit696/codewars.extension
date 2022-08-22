function highestValue(a, b) {
    return a.split("").reduce((a,b) => a + b.charCodeAt(0), 0) >= b.split("").reduce((a,b) => a + b.charCodeAt(0), 0) ? a : b
  }