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

//console.log(twoSum([2,7,11,15,3], 5));

var nums = [2,7,11,15,3];
var target = 5;
function twoSum1(nums, target){
    var sorted = nums.sort((a,b) => a-b);
    let left = 0;
    let right = sorted.length - 1;
    while (left < right) {
      let add = sorted[left] + sorted[right];
      console.log(add, "add");
      if (add === target) {
        return [left, right];
      } else if (add > target) {
        right--;
        console.log(right, "right");
      } else {
        left++;
        console.log(left, "left");
      }
    }
}

twoSum1()
