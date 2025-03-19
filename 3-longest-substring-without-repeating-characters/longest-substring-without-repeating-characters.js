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
        //console.log("charSet", charSet, s.substring(l,r+1))
        res = Math.max(res,r-l+1)
    }
    return res
};