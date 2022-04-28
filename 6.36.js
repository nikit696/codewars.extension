function getStrings(city){
    return city.toLowerCase().split("").reduce((acc,curr) =>{
      acc[curr] = (acc[curr] || "") + "*"
      return acc
    }, {})  
  }
console.log(getStrings("Chicago"))