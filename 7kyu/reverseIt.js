function reverseIt(data){
    return typeof data === "number" ? String(data).split("").reverse().join("") - 0
          : typeof data === "string" ? data.split("").reverse().join("")
          : data
   }