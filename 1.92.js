function weatherInfo(temperature) {
  let celsius = (temperature - 32) * (5/9)
  if (celsius > 0){
    return (celsius + " is above freezing temperature")
  }else{
    return (celsius + " is freezing temperature")
}
  }