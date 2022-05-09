function calculator(a,b,sign){
    if (isNaN(a) || isNaN(b)){
        return "unknown value"
        }
    return (sign === "*") ? a * b 
          :(sign === "/") ? a / b
          :(sign === "-") ? a - b
          :(sign === "+") ? a + b
          : "unknown value"
}