/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexes = {};
    for(let i = 0;i<nums.length;i++){
        if(indexes[nums[i]] == undefined) indexes[nums[i]] = [];
        indexes[nums[i]].push(i);
    }

    nums.sort(function(a, b){return a - b});

    let i = 0;
    let j = nums.length-1;

    while(i<j){
        let csum = nums[i] + nums[j];
        if(csum == target){
            let firstNumberIndex = indexes[nums[i]][0];
            let secondNumberIndex = indexes[nums[j]][indexes[nums[j]].length-1];
            return [firstNumberIndex,secondNumberIndex];
        }else if(csum < target){
            i++;
        }else j--;
    }
    return [-1,-1];
};





