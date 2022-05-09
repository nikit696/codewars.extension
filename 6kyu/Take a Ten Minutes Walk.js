function isValidWalk(walk) {
    if (walk.length !== 10){
      return false
    }
    let nS = 0;
    let sS = 0;
    let eS = 0;
    let wS = 0;
    for (let i = 0; i < walk.length; i++){
      if (walk[i] === "n"){
        nS++;
      } else if (walk[i] === "s"){
        sS++;
      } else if (walk[i] === "e"){
        eS++;
      } else if (walk[i] === "w"){
        wS++;
      } else {
        return "wtf"
      }
    }
    if (wS === eS && nS === sS){
      return true
    } else {
      return false;
    }
    //insert brilliant code here
  }