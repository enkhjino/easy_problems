//easy leetcode problems
//1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(nums, target){
    for(var i = 0; i<nums.length; i++){
        for(var j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j]===target){
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2,7,11,15,3], 5));
