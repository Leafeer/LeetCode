/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let ave = 0
    let arr = []
    nums1 = nums1.concat(nums2)
    arr.sort((a,b)=>{
        return a - b 
    })
    const mid = Math.floor(arr.length / 2)
    if (arr.length % 2 == 1){
        ave = arr[mid]
    }else {
        ave = (arr[mid-1] + arr[mid]) / 2
    }
    console.log(ave,arr,mid)
    return ave
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end