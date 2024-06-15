/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;
      const index = map.get(complement);
      const isTarget = map.has(complement);
      
      if (isTarget){
        return [i, index]
      }
      map.set(num, i)
    }
};
