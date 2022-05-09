function maskify(cc) {
  cc = cc.split('')
  if (cc.length <= 4){
    return cc.join("")
  }
  for (let i = 5; i <= cc.length; i++){
    cc[cc.length - i] = "#"
  }
return cc.join('')
}