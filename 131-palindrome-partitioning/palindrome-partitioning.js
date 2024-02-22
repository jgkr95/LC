/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res=[]

    function isPalindrome(str){
        for(let i=0;i<str.length;i++){
            if(str[i]!= str[str.length-i-1]){
                return false;
            }
        }
        return true;
    }

    function bt(i,comb){
        if(i>=s.length){
            res.push([...comb])
            return;
        }
        for(let j=i;j<s.length;j++){
            if(isPalindrome(s.substring(i,j+1))){
                comb.push(s.substring(i,j+1))
                bt(j+1,comb);
                comb.pop();
            }
        }
    }
    bt(0,[]);
    return res;
};