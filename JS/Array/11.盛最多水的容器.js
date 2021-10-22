/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length
    let x = n-1
    let y = 0
    let max = (n-1)*Math.min(height[n-1],height[0]);
    while (y<x){
        if(height[x]>height[y]){
            y++;
        }else{
            x--;
        }
        let area = Math.min(height[x],height[y])*(x-y)
        if(max<area){
            max = area
        }
    }
    return max;
}
            // if (element < ele2 ) {
            //     numX = element
            // }else{
            //     numX = ele2
            // }
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxArea;
// @after-stub-for-debug-end