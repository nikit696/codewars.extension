// Return the output array, and ignore all non-op characters
function parse( data )
{
  let arr = []
  let count = 0
  for (let i = 0; i < data.length; i++){
    switch(data[i]){
        case "i" : count = count + 1;
        break;
        case "d" : count = count - 1;
        break;
        case "s" : count = count**2;
        break;
        case "o" : arr.push(count);
        break;
        default : continue;
        break;
     }
  }
  return arr
}