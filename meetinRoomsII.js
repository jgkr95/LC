Meeting Rooms II
Solved 
Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), find the minimum number of days required to schedule all meetings without any conflicts.

Example 1:

Input: intervals = [(0,40),(5,10),(15,20)]

Output: 2
Explanation:
day1: (0,40)
day2: (5,10),(15,20)

Example 2:

Input: intervals = [(4,9)]

Output: 1
Note:

(0,8),(8,10) is not considered a conflict at 8
Constraints:

0 <= intervals.length <= 500
0 <= intervals[i].start < intervals[i].end <= 1,000,000

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = intervals.map((a)=>a.start).sort((a,b)=>a-b)
        let end = intervals.map((a)=>a.end).sort((a,b)=>a-b)

        let res = 0;
        let count = 0;

        let s=0,e=0;
        while(s<intervals.length){
            if(start[s]<end[e]){
                count++;
                s++;
            }else{
                count--;
                e++;
            }
            res = Math.max(count,res)
        }
        return res;

    }
}
