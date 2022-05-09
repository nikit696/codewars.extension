function grader(s) {
  return (s > 1 || s < 0.6) ? "F"
        :(s >= 0.9) ? "A"
        :(s >= 0.8) ? "B"
        :(s >= 0.7) ? "C"
        : "D"
}