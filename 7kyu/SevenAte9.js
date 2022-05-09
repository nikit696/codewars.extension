function sevenAte9(str){
 return str.split("").filter((item,index,str) => item == "9" && str[index + 1] == "7" && str[index - 1] == "7" ? "" : item).join("") 
}