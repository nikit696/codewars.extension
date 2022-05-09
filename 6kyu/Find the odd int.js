function findOdd(A) {
  if (A.length === 1){
    return A[0]
  }
  A = A.sort((x, b) =>{return x - b})
  let num = A[0]
  let n = 0
  for (let i = 0; i < A.length; i++){
    if (A[i] === num){
      n++
    } else {
     if (n % 2 === 1){
       return num
     } else if(i !== A.length - 1){
       num = A[i]
       n = 1
     } else {
       return A[i]
     }
     }
    }
  }