var findDigit = function(num, nth){
    num = String(num)
    return nth < 0 ? -1 : (num.length < nth) ? 0 : num[num.length - nth]
}
console.log(findDigit(56735, 3))