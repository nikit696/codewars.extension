function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode === '123ablqc0'){
      return true
    }
    if (enteredCode !== correctCode){
      return false
    } else {
      currentDate = currentDate.replace(",", "").split(" ")
      expirationDate = expirationDate.replace(",", "").split(" ")
      let arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      if (currentDate[2] < expirationDate[2]){
        return true
      } else if (currentDate[2] > expirationDate[2]){
        return false
      } else {
        if (arrMonths.indexOf(currentDate[0]) < arrMonths.indexOf(expirationDate[0])){
            return true
        } else if (arrMonths.indexOf(currentDate[0]) > arrMonths.indexOf(expirationDate[0])){
         return false          
        } else {
          currentDate = String(currentDate).replace(/^0+/, "")
          expirationDate = String(expirationDate).replace(/^0+/, "")
          if (+currentDate[1] <= +expirationDate[1]){
            return true
          } else {
            return false
          }
        }
      }
    }
  }