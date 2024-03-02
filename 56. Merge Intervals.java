// 56. Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

 class Solution {
public int[][] merge(int[][] intervals) {
    // If the intervals array is empty, return it as is
    if(intervals.length == 0) return intervals;

    // Sort the intervals array based on the start times of intervals
    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

    // List to store the merged intervals
    List<int[]> res = new ArrayList<>();

    // Initialize variables to track the start and end of the current interval
    int start = intervals[0][0];
    int end = intervals[0][1];

    // Iterate through each interval in the sorted array
    for(int[] i : intervals) {
        // If the start time of the current interval is less than or equal to the end time of the previous interval,
        // update the end time to the maximum of the current end time and the end time of the current interval
        if(i[0] <= end) {
            end = Math.max(end, i[1]);
        } else {
            // If the start time of the current interval is greater than the end time of the previous interval,
            // add the merged interval [start, end] to the result list and update start and end to the current interval
            res.add(new int[]{start, end});
            start = i[0];
            end = i[1];
        }
    }
    // Add the last merged interval [start, end] to the result list
    res.add(new int[]{start, end});

    // Convert the list of merged intervals to a 2D array and return
    return res.toArray(new int[0][]);
}

}