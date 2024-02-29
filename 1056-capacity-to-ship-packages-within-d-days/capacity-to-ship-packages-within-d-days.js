/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {


    let l= Math.max(...weights)
    let r = weights.reduce((c,n)=>c+n,0);
    let res = r;

    function canShip(cap){
        let curCap = cap;
        let shipsOrDays = 1;

        for(w of weights){
            if(curCap - w < 0) {
                curCap= cap;
                shipsOrDays++;
            }
            curCap -= w;
        }
        return shipsOrDays <= days
    }

    while(l<=r){

        let capacity = Math.ceil((l+r)/2)
        if(canShip(capacity)){
            res = Math.min(res,capacity)
            r = capacity - 1;

        }else{
            l = capacity + 1;
        }
    }

    return res
    
};