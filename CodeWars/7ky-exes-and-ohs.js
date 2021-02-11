// Solution 1

// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }


// Solution 2

function XO(str) {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


console.log(XO('ooxx') == true);
console.log(XO("xxOo") == true);
console.log(XO("xxxm") == false);
console.log(XO("Oo") == false);
console.log(XO("ooom") == false);
