// 57. Insert Interval
// Solved
// Medium
// Topics
// Companies
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


function insert(intervals: number[][], newInterval: number[]): number[][] {
    let res: number[][]=[];
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) { // for case like intervals [[3,4],[6,9]], newInterval = [1,2]
            res.push(newInterval)
            return [...res, ...intervals.splice(i, intervals.length)];
        } else if (newInterval[0] > intervals[i][1]) {  // for case like intervals [[1,2],[6,9]], newInterval = [3,4]
            res.push(intervals[i])
        } else { // for overlapping cases like [[1,3],[6,9]], newInterval = [2,5]
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
        }

    }
    res.push(newInterval);
    return res;

};