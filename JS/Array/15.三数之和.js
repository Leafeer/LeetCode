/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = nums.sort((a,b)=>{return a-b})
    let list = []
    if(arr[arr.length-1]<0){
        return list
    }
    for (let item = 0; item < arr.length; item++) {
        ele = arr[item]
        if(ele>0){
            break
        }
        if(item>0&&arr[item]==arr[item-1]){
            continue
        }
       let target = -ele
       let z = arr.length -1 
        for(let j = item+1;j<arr.length;++j){
            if(ele + arr[j]> 0){
                break
            }
            if(j>item+1&&arr[j]==arr[j-1]){
                continue
            }
            while(z>j&&arr[z]+arr[j]>target){
                z--;
            }
            if(j==z){
                break
            }
            if(arr[z]+arr[j]==target){
                let arr1 = [arr[item],arr[j],arr[z]]
                list.push(arr1)
            }
        }
    };
    console.log(list)
    return list
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end