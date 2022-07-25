function elapsedSeconds(startDate, endDate){
    return (Date.parse(endDate) - Date.parse(startDate))/1000
  }