/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let n = customers.length;

    let prefix_penalty = new Array(n+1).fill(0)
    let postfix_penalty = new Array(n+1).fill(0)

    for(let i=1;i<n+1;i++){
        postfix_penalty[i] = postfix_penalty[i-1];
        if(customers[i-1]=='N'){
            postfix_penalty[i] += 1;
        }
    }

    for(let i=n-1;i>=0;i--){
        prefix_penalty[i] = prefix_penalty[i+1];
        if(customers[i]=='Y'){
            prefix_penalty[i] += 1;
        }
    }
    let min_penalty = Number.POSITIVE_INFINITY,idx=0;

    for(let i=0;i<n+1;i++){
        let penalty = prefix_penalty[i]+postfix_penalty[i];
        if(penalty<min_penalty){
            min_penalty = penalty;
            idx=i
        }
    }
    return idx;
    
};