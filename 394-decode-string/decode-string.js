/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
     let stack = []

     for(const char of s){
        if(char !=']'){
            stack.push(char)
        }else{

            let substr = ''

            while(stack.length && stack[stack.length-1]!='['){
                substr = stack.pop() + substr;
            }
            stack.pop();

            let numStr = '';
            while (stack.length && !isNaN(stack[stack.length - 1])) {
                numStr = stack.pop() + numStr;
            }
            const repeatCount = parseInt(numStr);

            let str = ''
            for(let i=0;i<repeatCount;i++){
                str+=substr;
            }
            stack.push(str)
        }
     }

     return stack.join('')
    
};