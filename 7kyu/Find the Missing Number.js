
function missingNo(nums) {
  return 5050 - nums.reduce((acc,curr) => acc + curr, 0)
}