function getStrings(city){
  let obj =  city.toLowerCase().split("").reduce((acc,curr) =>{
    if(curr !== " "){
    acc[curr] = (acc[curr] || "") + "*"
    return acc
    } else {
      return acc
    }
  }, {})
  let str = ""
  for (let key in obj){
    str = str + key + ":" + obj[key] + ","
  }
  return str.substring(0, str.length - 1)
}