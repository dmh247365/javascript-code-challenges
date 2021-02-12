// Solution 1


// Solution 2




console.log(isPangram("This isn't a pangram!") === false);
console.log(isPangram("aaaaaaaaaaaaaaaaaaaaaaaaaa") === false);
console.log(isPangram("Detect Pangram") === false);
console.log(isPangram( "A pangram is a sentence that contains every single letter of the alphabet at least once.") === false);
console.log(isPangram("Cwm fjord bank glyphs vext quiz") === true);
console.log(isPangram("Pack my box with five dozen liquor jugs.") === true);
console.log(isPangram("How quickly daft jumping zebras vex.") === true);
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ") === true);
console.log(isPangram("AbCdEfGhIjKlM zYxWvUtSrQpOn") === true);