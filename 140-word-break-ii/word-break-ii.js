/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {

    const wordSet = new Set(wordDict) // Converting to set for faster lookup

    const map = {}

    function dfs(start){
        if(map[start]){
            return map[start]
        }
        if(start == s.length)
         return ['']

        const sentences = [];
         for(let end=start+1;end<=s.length;end++){
             if(wordSet.has(s.substring(start,end))){
                 const nextSentences = dfs(end);
                 console.log(start," ",s.substring(start,end)," ","nextSen",nextSentences)
                for(let sentence of nextSentences){
                    if(sentence){
                        sentences.push(s.substring(start,end)+ " "+ sentence)
                    }else{
                        sentences.push(s.substring(start,end))
                    }
                }
             }
         }
        map[start] = sentences
         return sentences;
    }

    return dfs(0)
    
};