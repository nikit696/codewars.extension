const whosOnline = (friends) => {
    let object = {
      online: [],
      offline: [],
      away : []
    }
    for (let i = 0; i < friends.length; i++){
      if (friends[i].status === "offline"){
        object.offline.push(friends[i].username)
      } else if (friends[i].status === "online" && friends[i].lastActivity <= 10){
        object.online.push(friends[i].username)
      } else {
        object.away.push(friends[i].username)
      }
    }
  for (let key in object){
    if (object[key].length === 0){
      delete object[key]
    }
  }
  return object
}