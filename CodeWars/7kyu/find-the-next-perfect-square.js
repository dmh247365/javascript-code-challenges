// Solution 1
function findNextSquare1(sq) {
  return Math.sqrt(sq) %1 ? -1 :  Math.pow(Math.sqrt(sq) +1, 2);
}


//console.log(2 % 1 );

// Solution 2
function findNextSquare2(sq) {
  let root = Math.sqrt(sq);
  if(Number.isInteger(root)) {
    return Math.pow(++root, 2)
  }
  return -1;
}

console.log('solution-1');
console.log(findNextSquare1(121) === 144);
console.log(findNextSquare1(625) === 676);
console.log(findNextSquare1(114) === -1);
console.log(findNextSquare1(319225) === 320356);
console.log(findNextSquare1(15241383936) === 15241630849);
console.log(findNextSquare1(155) === -1);
console.log("");

console.log('solution-2');
console.log(findNextSquare2(121) === 144);
console.log(findNextSquare2(625) === 676);
console.log(findNextSquare2(114) === -1);
console.log(findNextSquare2(319225) === 320356);
console.log(findNextSquare2(15241383936) === 15241630849);
console.log(findNextSquare2(155) === -1);
console.log("");
