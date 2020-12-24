/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let arr = nums.sort((a,b)=>{return a-b})
    let tar = 1000
    let sum = 0
    let sum1 = 0
    let isFlag = true
    for (let i = 0; i < arr.length; i++) {
        const e1 = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            const e2 = arr[j];
            for (let k = j+1; k < arr.length; k++) {
                const e3 = arr[k];
                sum = e1 + e2 + e3
               let z = Math.abs(sum - target)
                if (tar > z) {
                    tar = z
                    sum1 = sum
                    console.log(e1,e2,e3)
                    isFlag = false
                }
            }
        }
    }
    console.log(tar,sum1)
    return sum1
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = threeSumClosest;
// @after-stub-for-debug-end