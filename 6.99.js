String.prototype.camelCase=function(){
  let arr = this.split(" ")
  return arr.map(a => a[0].toUpperCase() + a.substring(1)).join("")
  
}
console.log("say hello ".camelCase())