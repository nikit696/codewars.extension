function validBraces(braces){
    let stack = []
     braces = braces.split("")
     for (let i = 0; i < braces.length; i++){
       if (braces[i] === "(" || braces[i] === "[" || braces[i] === "{"){
         stack.push(braces[i])
       } else {
         if (stack.length === 0){
           return false
         } else {
           if ((braces[i] === "]" && stack[stack.length - 1] === "[") || (braces[i] === "}" && stack[stack.length - 1] === "{") || (braces[i] === ")" && stack[stack.length - 1] === "(")){
             stack.pop()
           } else {
             return false
           }
         }
       }
       }
     return stack.length === 0 ? true : false
 }