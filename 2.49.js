function evaporator(content, evap_per_day, threshold){ 
  let days = 0
  let content1 = content
  while (content > threshold / 100 * content1){
    content = content - content * evap_per_day / 100
    days++
  }
  return days
}