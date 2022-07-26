function candies(kids){
    return kids.length > 1 ? Math.max(...kids) * kids.length - kids.reduce((a,b) => a + b) : -1
  }