//  k-th node from the end of the linked list

// Problem statement
// Given the head node of the singly linked list and an integer ‘k’, , find the value at the kth node from the end of the linked list.

// For example:

// For the above-linked list, if k=2, then the value at the kth i.e second node from the end is ‘12’.


import java.util.* ;
import java.io.*; 
public class Solution {
    public static Node findKthFromLast(Node head, int K) {
        // Write your code here
        Node slow = head;
        Node fast = head;

        while(K-- > 0){
            if(fast==null) return head;
            fast=fast.next;
        }
        while(fast!=null){
            slow=slow.next;
            fast=fast.next;
        }
        return slow;
    }
}
