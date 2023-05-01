/**
 * @param {number[]} nums
 * @return {boolean}
 */

// loop method
const containsDuplicate = (nums) => {
    nums = nums.sort( (a, b) => a - b );;
 
     for (let i = 0; i < nums.length - 1; i ++) {
         if (nums[i] === nums[i+1]) {
             return true
         }
     }
     return false
 };

 //brute force method
 const brute = nums => {
    for (let i = 0; i < nums.length-1; i++) {
      for (let j = i+1; j < nums.length; j++) {
        if (nums[i] === nums[j]) return true;
      }
    }
    return false;
  };

 //Set optimal method
 // Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate2 = function(nums) {
    const s = new Set(nums); 
    return s.size !== nums.length
};