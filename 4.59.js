function solution(fullText, searchText){
  let pattern = new RegExp(searchText, "g")
  return fullText.match(pattern) == null ? 0 : fullText.match(pattern).length
}