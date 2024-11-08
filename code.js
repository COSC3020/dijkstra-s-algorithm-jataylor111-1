function dijkstra(graph, sourceNode) {
    // Check for an empty graph
    if (Object.keys(graph).length === 0) {
        return {};
    }

    // Set the nodes to an array of unvisited nodes
    let unvisited = Object.keys(graph);

    // Initialize distances
    let dist = {};
    for (let node of unvisited) {
        dist[node] = Infinity;
    }
    dist[sourceNode] = 0;

    while (unvisited.length > 0) {
        let currentNode = null;
        let smallestDistance = Infinity;

        // Find the unvisited node with the smallest distance
        for (let node of unvisited) {
            if (dist[node] < smallestDistance) {
                smallestDistance = dist[node];
                currentNode = node;
            }
        }

        // Remove the currentNode from unvisited
        unvisited = unvisited.filter(node => node !== currentNode);

        // Update distances for neighbors of currentNode
        for (let neighbor in graph[currentNode]) {
            let newDist = dist[currentNode] + graph[currentNode][neighbor];
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
            }
        }

        // I was having issues with an infinite While loop even after a solution has been found so I added a break condition
        if (currentNode === null) {
            break;
        }
        
    }

    return dist;
}



// Borrowed from the slides without the negative weight
// let graph = {
//     'A':{'B': 3}, // Needs to be squiggly
//     'B':{'A': 3,'C': 10,'E': 1,'D': 5},
//     'C':{'B': 10},
//     'D':{'B': 5,'E': 2},
//     'E':{'B': 1,'D': 2}
// };
// console.log(Object.keys(graph).length);
// console.log(dijkstra(graph, 'A'));
