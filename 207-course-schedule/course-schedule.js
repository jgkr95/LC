/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    let adj = [];
    for(let i=0;i<numCourses;i++){
        adj[i]=[]
    }

    for(let i=0;i<prerequisites.length;i++){
        adj[prerequisites[i][0]].push(prerequisites[i][1])
    }

    let queue = [];
    let indegree = Array(numCourses).fill(0);

    for(let i=0;i<numCourses;i++){
        for(const node of adj[i]){
            indegree[node]++;
        }
    }

    for(let i=0;i<numCourses;i++){
        if(indegree[i]==0){
            queue.push(i);
        }
    }

    let front = 0;
    let topo = [];

    while(front < queue.length){
        let node = queue[front++];
        topo.push(node);

        for(const curNode of adj[node]){
            indegree[curNode]--;
            if(indegree[curNode]==0) queue.push(curNode);
        }
    }
    if(topo.length === numCourses) return true;
    return false
    
    
};