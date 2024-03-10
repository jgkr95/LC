/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {

    position.sort((a,b)=>a-b)

    let max = position[position.length-1] - position[0];
    let res=0;
    let low = 1, high = max;
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(canPlaceBalls(position,mid,m)){
            res=mid;
            low=mid+1;
        }else{
            high=mid-1
        }
    }


    // for(let i=1;i<=max;i++){
    //     console.log("res",res)
    //     if(canPlaceBalls(position,i,m))
    //     {
    //         res=i;
    //         console.log("insidec ",i)

    //     }
    // }
    return res;
    
};

function canPlaceBalls(arr, dist, m) {
    let noOfBalls = 1; // Start with 1 ball placed at the first position
    let last = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - last >= dist) {
            noOfBalls++; // Increment the count of placed balls
            last = arr[i]; // Update the position of the last placed ball
        }
    }

    // Check if the number of placed balls is at least m
    return noOfBalls >= m;
}