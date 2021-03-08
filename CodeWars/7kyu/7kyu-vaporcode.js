// Solution 1
function vaporcode1(text) {
  const a = [];
  let uppercase = text.toUpperCase().split('');
  const map1 = uppercase.map(x => {
    if(x !== ' ') {
      a.push(x, "");
    }
  })
  return  a.join(' ').trim();
}

// Solution 2
function vaporcode2(text) {
  return text.toUpperCase().split(" ").join("").split("").join("  ");
}

// Solution 3
function vaporcode3(text) {
  return text.toUpperCase().replace(/ /g,'').split('').join('  ');
}


console.log('solution-1');
console.log(vaporcode1("Lets go to the movies") === "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
console.log(vaporcode1("Why isnt my code working") === "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G");
console.log("");


console.log('solution-2');
console.log(vaporcode2("Lets go to the movies") === "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
console.log(vaporcode2("Why isnt my code working") === "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G");
console.log("");

console.log('solution-3');
console.log(vaporcode3("Lets go to the movies") === "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
console.log(vaporcode3("Why isnt my code working") === "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G");
console.log("");