/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charSet = []
    let l = 0;;
    let res = 0
    for(let r=0;r<s.length;r++){
        while(charSet.includes(s[r])){
            charSet.shift();
            l+=1;
        }
        charSet.push(s[r]);
        res = Math.max(res,r-l+1)
    }
    return res
};