function tribonacci(signature,n){
    for (let i = 3; signature.length < n; i++){
      signature[i] = signature[i - 3] + signature[i - 2] + signature[i - 1]
    }
    return signature.slice(0, n)
  }