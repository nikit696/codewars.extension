function findUniq(arr) {
 let a = arr.sort((x, b) => {return x - b})
 if (a[0] !== a[1]){
   return a[0]
 } else {
   return a[a.length - 1]// do magic
}
  }
