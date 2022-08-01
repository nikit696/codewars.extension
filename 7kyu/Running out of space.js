function spacey(array){
    return array.map((_,index)=>{
      return array.slice(0,index + 1).join("")
    })
  }