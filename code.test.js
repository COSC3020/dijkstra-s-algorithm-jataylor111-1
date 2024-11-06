const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

// Empty Graph
console.log("Test 1");
const graph2 = {};
const source2 = 'A';
const expected2 = {};
assert.deepStrictEqual(dijkstra(graph2, source2), expected2, "Test 1 failed");

// Graph with single node
console.log("Test 2");
const graph3 = { A: {} };
const source3 = 'A';
const expected3 = { A: 0 };
assert.deepStrictEqual(dijkstra(graph3, source3), expected3, "Test 2 failed");

// Simple Graph
console.log("Test 3");
const graph1 = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};
const source1 = 'A';
const expected1 = { A: 0, B: 1, C: 3, D: 4 };
assert.deepStrictEqual(dijkstra(graph1, source1), expected1, "Test 3 failed");

// Graph with no path to some nodes
console.log("Test 4");
const graph4 = {
    A: { B: 2 },
    B: { A: 2, C: 3 },
    C: { B: 3 },
    D: {} // Node 'D' is isolated
};
const source4 = 'A';
const expected4 = { A: 0, B: 2, C: 5, D: Infinity };
assert.deepStrictEqual(dijkstra(graph4, source4), expected4, "Test 4 failed");

// Larger graph with various paths
console.log("Test 5");
const graph5 = {
    A: { B: 10, C: 3 },
    B: { C: 1, D: 2 },
    C: { B: 4, D: 8, E: 2 },
    D: { E: 7 },
    E: { D: 9 }
};
const source5 = 'A';
const expected5 = { A: 0, B: 7, C: 3, D: 9, E: 5 };
assert.deepStrictEqual(dijkstra(graph5, source5), expected5, "Test 5 failed");

// console.log("All tests passed");
