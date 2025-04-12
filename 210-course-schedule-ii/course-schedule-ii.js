/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let adj = [];
    let n = numCourses;

    for (let i = 0; i < n; i++) {
        adj[i] = []
    }

    for (const [first,second] of prerequisites) {
        adj[first].push(second);
    }

    let indegree = Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        for (const node of adj[i]) {
            console.log({node})
            indegree[node]++
        }
    }

    let queue = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] == 0) {
            queue.push(i);
        }
    }


    let topo = []
    let front = 0;

    while(front < queue.length){
        const node = queue[front++]
        topo.push(node);

        for(const curNode of adj[node]){
            indegree[curNode]--
            if(indegree[curNode]==0) queue.push(curNode)
        }
    }

    if(topo.length != n) return []

    return topo.reverse();


};