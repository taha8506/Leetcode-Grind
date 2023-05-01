/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums,target) => {
    let newArr = []
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                newArr.push(i)
                newArr.push(j)
            }
        }
    }
    return newArr
};