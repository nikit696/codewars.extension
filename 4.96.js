function whatCentury(year)
{
  let century = year % 100 === 0 ? year / 100 : Math.ceil(year / 100)
  return `${century}${century % 10 === 1  && century !== 11 ? "st" : century % 10 === 2 && century !== 12 ? "nd" : century % 10 === 3 && century !== 13 ? "rd" : "th"}`
}