/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    let res = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i]

        const lastEnd = res[res.length - 1][1]

        if (lastEnd >= start){
            res[res.length - 1][1] = Math.max(end,lastEnd)
        }else{
            res.push(intervals[i])
        }
    }
    return res;

};