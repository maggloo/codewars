let graph = {}

graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2
graph['a'] = {}
graph['a']['fin'] = 1
graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5
graph['fin'] = {}

let costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = Infinity

let parents = {}
parents['a'] = "start"
parents['b'] = 'start'
parents['in'] = null

let processed = []

function find_lowest_cost_node() {
  let lowest_cost = Infinity
  let lowest_cost_node = null
  for (let node in costs) {
    let cost = costs[node]
    if (cost < lowest_cost && !processed.includes(node)){
      lowest_cost = cost
      lowest_cost_node = node
    }
  }
  return lowest_cost_node
}


let node = find_lowest_cost_node(costs) //b

while (node) {
  let cost = costs[node] //2
  let neighbors = graph[node] //a fin
  Object.keys(neighbors).forEach(function(n) {
    let new_cost = cost + neighbors[n] //2 + 3 = 5
    if (costs[n] > new_cost){
      costs[n] = new_cost
      parents[n] = node
    }
  });
  processed.push(node)
  node = find_lowest_cost_node(costs)
}
console.log("Cost from the start to each node:");
console.log(costs); // { a: 5, b: 2, fin: 6 }
