function removeDuplicateWords (s) {
  s = s.split(" ")
  return s.filter((item, position) => s.indexOf(item) == position).join(" ")
}