String.prototype.camelCase=function(){
  if (this.length === 0){
    return ""
  }
  let arr = this.trim().split(" ")
  return arr.map(a => a[0].toUpperCase() + a.substring(1)).join("")
  
}