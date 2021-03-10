// Solution 1
function bitCounting1(a,b) {
const range = [];
for(i = a; i <= b; i ++) {
  range.push(i.toString(2));
}
const binaryString = (range.join(''));
return binaryString.match(/1/g).length;
}

// Solution 2
function bitCounting2(a,b) {
  let total = 0;
  for(i = (a === 0) ? 1 : a; i <= b; i ++) {
    total  += i.toString(2).match(/1/g).length
  }
  return total
  }
  
// Solution 3
function bitCounting3(a,b) {
  let total = 0;
  for(i = a; i <= b; i ++) {
    total  += i.toString(2).replace(/0/g, '').length
  }
  return total
  }




console.log('solution-1');
console.log(bitCounting1(2,7) === 11);
console.log(bitCounting1(0,1) === 1);
console.log(bitCounting1(4,4) === 1);
console.log("");

console.log('solution-2');
console.log(bitCounting2(2,7) === 11);
console.log(bitCounting2(0,1) === 1);
console.log(bitCounting2(4,4) === 1);
console.log("");

console.log('solution-3');
console.log(bitCounting2(2,7) === 11);
console.log(bitCounting2(0,1) === 1);
console.log(bitCounting2(4,4) === 1);
console.log("");
