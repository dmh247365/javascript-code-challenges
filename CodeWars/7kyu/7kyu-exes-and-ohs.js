// Solution 1
function XO1(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// Solution 2
function XO2(str) {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

console.log('solution-1');
console.log(XO1('ooxx') == true);
console.log(XO1("xxOo") == true);
console.log(XO1("xxxm") == false);
console.log(XO1("Oo") == false);
console.log(XO1("ooom") == false);
console.log("");

console.log('solution-2');
console.log(XO2('ooxx') == true);
console.log(XO2("xxOo") == true);
console.log(XO2("xxxm") == false);
console.log(XO2("Oo") == false);
console.log(XO2("ooom") == false);
console.log("");


