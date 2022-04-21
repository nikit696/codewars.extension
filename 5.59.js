function nextItem(xs, item) {
  return (Array.isArray(xs) || typeof xs === "string")  && xs.includes(item) ? xs[xs.indexOf(item) + 1] : undefined
}
console.log(nextItem(["a", "b", "c"], "d"))