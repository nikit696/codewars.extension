var findDigit = function(num, nth){
    num = String(Math.abs(num))
    return nth <= 0 ? -1 : (num.length < nth) ? 0 : +num[num.length - nth]
}