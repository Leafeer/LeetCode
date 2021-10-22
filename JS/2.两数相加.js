/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
    let tail = null
    let head = null
    let carry = 0
    while(l1||l2){
        let n1 = l1 ? l1.val : 0
        let n2 = l2 ? l2.val : 0
        let sum = null
        sum = n1 + n2 + carry 
        carry = Math.floor(sum / 10)
        if(!head){
            head = tail = new ListNode(sum%10)
        }else{
            tail.next =  new ListNode(sum%10)
            tail = tail.next
        }
        if(l1){
            l1 = l1.next
        }
        if(l2){
            l2 = l2.next
        }
    }
    if (carry > 0){
        tail.next = new ListNode(carry)
    }
    return head
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end