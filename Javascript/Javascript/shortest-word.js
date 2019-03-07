//Problem:
//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

function findShort(s){
const arr = s.split(' ');
 
 const sorted = arr.sort(function(a, b){
   return a.length - b.length;
  })
   return sorted[0].length;
}

//Test:
findShort("bitcoin take over the world maybe who knows perhaps");

//Pseudocode:
//1. Convert to array
//2. Find the length of every word
//3. Sort by smallest

//Potential Code:
// arr.sort(function(a, b){
//   // ASC  -> a.length - b.length
//   // DESC -> b.length - a.length
//   return b.length - a.length;
// });


// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }
