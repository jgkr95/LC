/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    res = [];
    if (s.length > 12) return res;
    function bt(curIndex, noOfDots, curIp) {
            if (noOfDots == 4 && curIndex == s.length) {
                res.push(curIp.slice(0,-1));
                return
            }
            if(noOfDots > 4) return
        for (let i = curIndex; i < Math.min(curIndex + 3, s.length); i++) {
            console.log({curIndex, noOfDots,curIp},Number(s.substring(curIndex, i + 1)))
            if (Number(s.substring(curIndex, i+1 )) < 256 && (i==curIndex || s[curIndex] != '0')) {
                bt(i+1, noOfDots + 1, curIp+s.substring(curIndex, i +1)+'.')
            }

        }
    }
    bt(0, 0, "")
        return res
};