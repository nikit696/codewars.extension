function uniqueSum(lst){
    return lst.length ? lst.filter((item,index) => lst.indexOf(item) === index).reduce((a,b) => a + b,0) : null
  }