function solution(string,limit){
    return (limit < string.length - 1) ? `${string.substr(0, limit)}...` : string
}