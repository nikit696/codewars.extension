function nbYear(p0, percent, aug, p) {
    percent = percent / 100
    let i = 0
    do {
      p0 = p0 + p0 * percent + aug
      i++
} while (p0 < p)
  return i
  }