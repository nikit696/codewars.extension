function searchNames( logins ){
    return logins.filter(elem =>{
      return /_$/.test(elem[0])
    })
  }