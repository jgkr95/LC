/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {

    let cur = list1;
    let count = 0;

    while(count < a-1){
        cur=cur.next;
        count++;
    }
    head = cur;
    while(count <=b){
        cur=cur.next; // this will be tail that will be appended to list2 end;
        count++;
    }
    head.next = list2;


    while(list2.next){
        list2 = list2.next;
    }
    list2.next = cur // Appending tail

return list1


    
};