/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let count = Array(26).fill(0)
    let res = {}

    for(str of strs){
        count = Array(26).fill(0)
        for(const char of str){
            count[char.charCodeAt() - 'a'.charCodeAt()]++;
        }
        const key =count.join('#')
        if(!res[key]){
            res[key] = []
        }
        res[key].push(str)
    }

    return Object.values(res)
};