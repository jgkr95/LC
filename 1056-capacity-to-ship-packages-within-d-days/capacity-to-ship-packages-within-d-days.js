/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let l=Math.max(...weights), r=0, m=0, res=0;
    weights.forEach(weight => r+=weight);

    const possible = (capacity) =>{
        let totalDays = 1, currCapcity =0;

         weights.forEach((weight) => {
            currCapcity += weight;

            if(currCapcity > capacity){
                totalDays++;
                currCapcity = weight
            }
         });

        //  console.log("---", totalDays,totalDays <= days)

         return totalDays <= days
    }

    while(l<=r){
        m = Math.floor((l+r)/2);
        if(possible(m)){
            res = m;
            r = m-1;
        }else{
            l = m+1
        }
    }

    return res;

};