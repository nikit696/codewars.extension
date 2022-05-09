function yearDays(year)
{
  const day = ((year % 400 == 0 && year % 4 == 0) || (year % 4 === 0 && year % 100 != 0)) ? "366" : "365"
  
  return `${year} has ${day} days`
  }