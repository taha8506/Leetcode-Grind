// Time Complexity : O(n)
// Space Complexity : O(n)
var containsNearbyDuplicate = function(nums, k) {
    const hasmap = new Map();
    for (let i = 0; i < nums.length; i++) {
        // Check if the difference betweend duplicates is less than k
        if (i - hasmap.get(nums[i]) <= k) {
            return true;
        }
        hasmap.set(nums[i], i);
    }
    return false;
};


//forloop method
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate2 = function(nums, k) {
    for(let i = 0; i <= nums.length-1; i++){
        let j = nums.length -1;
        while(i < j){
            if(nums[i] == nums[j] && Math.abs(i - j) <= k){
                return true
            }
            j--;
        }
       
    }
    return false
};