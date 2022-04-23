const removeConsecutiveDuplicates = s => {
  s = s.split(" ").filter((a,b,arr) => a !== arr[b + 1]).join(" ")
  return s
  }
// your perfect code...