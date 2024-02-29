/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    
    let l=0;
    let r=Math.max(...piles);
    let res = r;

    while(l<=r){
        let mid = Math.ceil((l+r)/2);
        let hours = 0;
        for(let i=0;i<piles.length;i++){
            hours += Math.ceil(piles[i]/mid);
        }
        if(hours <= h){
            res = Math.min(res, mid)
            r = mid - 1;
        }else{
            l = mid + 1;
        }
    }

    return res;

};