# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

-----------------------------------------------------------------------------------------------

My complexity should be $\Theta(V^2)$

First, at line 12 there's a for loop that sets all the distances equal to Infinity.  This is based on the length of the unvisited nodes array so it'll be a complexity of V

Next we enter a while at 17, this will run until there are no more nodes in the "unvisited" array, this also has a complexity of V

After that we have a for loop that is once again based on the the number of nodes in the "unvisited" array, another V

Finally I have a second for loop that is based on the edges, this one then will be a complexity of E

So, the complexity is $\Theta(V(V + E) + V))$ = $\Theta(V^2 + VE + V)$

And by removing lower order terms we get a final complexity of $\Theta(V^2)$

I came across this page (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) while looking around in the for loop documentation (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) for any potential changes that could be made for graphs

And this one (https://medium.com/@ging.m.louie/easy-javascript-implementation-of-a-graphs-adjacency-list-1a52f1bb9a5c) for how to make graphs in javascript using an adjacency list

I came across this site (https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/#heading-remove-an-element-of-a-certain-value-with-filter) while trying to get my function to remove a specific element from the "unvisited" array, other sites kept saying to use splice but I couldn't seem to make it work, this site recommended using filter instead.

This (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) was for how to get the nodes out of said list

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice





