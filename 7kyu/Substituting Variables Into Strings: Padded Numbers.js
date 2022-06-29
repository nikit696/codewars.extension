function solution(value){
    return `Value is ${"0".repeat(5 - String(value).length) + String(value)}`
  }