// Solution 1

function findNextSquare(sq) {
  return Math.sqrt(sq) %1 ? -1 :  Math.pow(Math.sqrt(sq) +1, 2);
}


console.log(2 % 1 );

// Solution 2
/*
function findNextSquare(sq) {
  let root = Math.sqrt(sq);
  if(Number.isInteger(root)) {
    return Math.pow(++root, 2)
  }
  return -1;
}
*/


console.log(findNextSquare(121) === 144);
console.log(findNextSquare(625) === 676);
console.log(findNextSquare(114) === -1);
console.log(findNextSquare(319225) === 320356);
console.log(findNextSquare(15241383936) === 15241630849);
console.log(findNextSquare(155) === -1);


