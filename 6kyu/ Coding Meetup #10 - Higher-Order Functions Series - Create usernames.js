function addUsername(list) {
    for (let i = 0; i < list.length; i++){
      let now = new Date()
      list[i].username = list[i].firstName.toLowerCase() + list[i].lastName.substring(0,1).toLowerCase() + String(now.getFullYear() - list[i].age)
    }
    return list
  }