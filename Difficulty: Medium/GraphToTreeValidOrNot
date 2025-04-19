Graph Valid Tree
Solved 
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

Example 1:

Input:
n = 5
edges = [[0, 1], [0, 2], [0, 3], [1, 4]]

Output:
true
Example 2:

Input:
n = 5
edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]

Output:
false
Note:

You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
Constraints:

1 <= n <= 100
0 <= edges.length <= n * (n - 1) / 2


class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // If graph contains cycle or if it cannot traverse to every node from source 
        // then it is not valid tree
        let adj= [];
        let visited = Array(n).fill(false)
        for(let i=0;i<n;i++){
            adj[i]=[]
        }
        // Build adjacency 
        for(const [u,v] of edges){
            adj[u].push(v)
            adj[v].push(u)
        }

        function hasCycleDfs(node, parent){
            visited[node]=true;

            for(const curNode of adj[node]){
                if(!visited[curNode]){
                    if(hasCycleDfs(curNode, node))
                        return true
                }
                else if (curNode != parent){
                    return true; //cycle detected
                }
            }

            return false;

        }

        if(hasCycleDfs(0,-1)) return false

        return visited.filter(Boolean).length == n
        
    }
}
