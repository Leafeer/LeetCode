/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0
    let arr = s.split('')
    arr.forEach((element, i) => {
        let n = null
        if (element == "I") {
            if (arr[i + 1] == 'V') {
                n = 4
            } else {
                n = 1
            }
            sum = sum + n
        }
    });
    console.log(sum)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = romanToInt;
// @after-stub-for-debug-end