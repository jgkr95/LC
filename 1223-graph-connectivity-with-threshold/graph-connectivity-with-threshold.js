class DSU{
    constructor(n){
        this.parent = Array(n+1)
        for(let i=0;i<n+1;i++){
            this.parent[i]=i
        }
    }

    find(x){
        if(x!=this.parent[x]){
            this.parent[x]=this.find(this.parent[x])
        }
        return this.parent[x]

    }

    union(x,y){
        const rootX=this.find(x)
        const rootY=this.find(y)

        if(rootX != rootY){
            this.parent[rootY]=rootX;
        }
    }
}

/**
 * @param {number} n
 * @param {number} threshold
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var areConnected = function(n, threshold, queries) {

    let dsu = new DSU(n)


    for(let i=1+threshold;i<=n;i++){
        for(let j=2*i;j<=n;j+=i){
            dsu.union(i,j)
        }
    }

    let res=[]

    for(const [u,v] of queries){
        if(dsu.find(u)==dsu.find(v)){
            res.push(true)
        }else{
            res.push(false)
        }
    }

    return res
    
};