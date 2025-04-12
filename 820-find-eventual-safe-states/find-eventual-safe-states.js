/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {

    let adjRev = []
    let n = graph.length
    let indegree = Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        adjRev[i] = []
    }

    for (let i = 0;i<n;i++){
        for(const node of graph[i]){
            //console.log({i,node},graph[i])
            adjRev[node].push(i);
            indegree[i]++
        }
    }
    //console.log({adjRev})

    let queue=[]

    for(let i=0;i<n;i++){
        if(indegree[i]==0)
            queue.push(i)
    }

    //console.log({indegree,queue})

    let topo =[]
    let front = 0;
     while(front<queue.length){
        const node = queue[front++]
        topo.push(node)
        for(const curNode of adjRev[node])
        {
            indegree[curNode]--;
            if(indegree[curNode]==0) queue.push(curNode)
        }
    }

     return topo.sort((a,b)=>a-b)
    
};