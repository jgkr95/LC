// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.


// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode slow=head,fast=head,temp=head;

        while(n-- > 0) {
            if(fast==null) return head;
            fast=fast.next;
        }

        if(fast==null) return head.next;
        
        while(fast!=null){
            temp=slow;
            slow=slow.next;
            fast=fast.next;
        }
        temp.next = slow.next;

        return head;
        
    }
}