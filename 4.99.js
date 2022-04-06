function tea42(input) {
  return String(input).split("").map(a => a == 2 ? "t" : a).join("")
};