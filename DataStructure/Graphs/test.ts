/*
Weigthed driected and un-directed graph
*/
//Edge
function Edge(src, dest, weight){
    this.src = src;
    this.dest = dest;
    this.weight = weight;
  }
  
  // A class to store adjacency list nodes
  function Vertex(value, weight) { 
    this.value = value;
    this.weight = weight;
        
    this.toString = function() {
      return this.value + " (" + this.weight + ")";
    }
  }
  
  // A class to represent a graph object
  const Graph = function(edges) {
    // A list of lists to represent an adjacency list
    let adj = new Map();
   
    // add edges to the directed graph
    for (let e of edges) {
      const {src, dest, weight} = e;
      // allocate new node in adjacency list from src to dest
      if(adj.has(src)){
        adj.get(src).push(new Vertex(dest, weight));
      }else{
        adj.set(src, [new Vertex(dest, weight)]);
      }
  
      // uncomment next lines for undirected graph
      // allocate new node in adjacency list from dest to src
      
      // if(adj.has(dest)){
      //   adj.get(dest).push(new Node(src, weight));
      // }else{
      //   adj.set(dest, [new Node(src, weight)]);
      // }
    }
    
    this.add = function(edge){
      const {src, dest, weight} = edge;
      // allocate new node in adjacency list from src to dest
      if(adj.has(src)){
        adj.get(src).push(new Vertex(dest, weight));
      }else{
        adj.set(src, [new Vertex(dest, weight)]);
      }
      
      
      // uncomment next lines for undirected graph
      // allocate new node in adjacency list from dest to src
      
      // if(adj.has(dest)){
      //   adj.get(dest).push(new Node(src, weight));
      // }else{
      //   adj.set(dest, [new Node(src, weight)]);
      // }
    }
  
    this.remove = function(edge) {
      const {src, dest} = edge;
      let srcList = adj.get(src);
      srcList = srcList.filter(e => e !== dest);
      
      if(srcList.length === 0){
        adj.delete(src);
      }else{
        adj.set(src, srcList);
      }
  
      // uncomment next lines for undirected graph
  //     let destList = adj.get(dest);
  //     destList = destList.filter(e => e !== src);
      
  //     if(destList.length === 0){
  //       adj.delete(dest);
  //     }else{
  //       adj.set(dest, destList);
  //     }
      
      return true;
    }
    
      
    // Function to print adjacency list representation of a graph
    this.print = function(){
      let n = adj.size;
   
      for (let src of adj.keys()) {
        // print current vertex and all its neighboring vertices
        let str = "";
        for (let edge of adj.get(src)) {
          str += "(" + src + " ——> " + edge + ")";
        }
        console.log(str);
      }
    }
  
    //Return graph
    this.getList = () => adj;
  }