function removeUrlAnchor(url){
    url.split("")
    let arr = []
    for (let i = 0; i < url.length; i++){
      if (url[i] === "#"){
        break;
      } else {
        arr.push(url[i])
      }
    }
    return arr.join("")
    // TODO: complete
  }