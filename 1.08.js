function solution(nums){
  return (nums === null || nums.length === 0) ? []
        : nums.sort(function(a, b){return a - b;})
}