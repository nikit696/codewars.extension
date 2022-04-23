function hydrate(s) {
    let count = s.replace(/[^\d]/g, "").split("").reduce((a, b) => a + +b, 0)
    return `${count} ${count === 1 ? "glass" : "glasses"} of water`
  }
console.log("2 glasses of wine and 1 shot".replace(/[^\d]/g, ""))