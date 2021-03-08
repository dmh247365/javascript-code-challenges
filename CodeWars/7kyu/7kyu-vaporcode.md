## 7kyu - Vaporcode

### Question
Write a function that converts any sentence into a VAPORWAVE sentence. A VAPORWAVE sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this VAPORWAVE effect.

#### Examples input/output:

```js
vaporcode("Lets go to the movies") => "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S";
vaporcode("why isn't my code working?") => "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G";
```

<hr>

### Approach
1 - Will need to convert text to upper case
2 - Insert space after each letter 
3 - use regex?

split() method splits a string into an array of substrings.
join() method returns contents of an array as a string.
toUpperCase() converts string to uppercase without mutating the original string.
replace() method, returns a new string, based on a pattern we pass in.

#### To run solutions
just navigate to the relevant folder and type $node <filename>

#### Solution 1
works but far too long winded. 

#### Solution 2
 ie string = "the red car"

1. transform original string to uppercase `THE RED CAR`
2. convert string to an array, `['THE', 'RED', 'CAR']`
3. join array contents into a single string with no spaces `THEREDCAR`
4. Split string into an array by letter, `['T', 'H', 'E', 'R'...etc]`
5. Join contents  `T  H  E  R  E  D  C  A  R`


#### Solution 3
 ie string = "the red car

1. transform original string to uppercase `THE RED CAR`
2. replace passing in regex global flag and also ' ' `THEREDCAR`
7. Split string into an array by letter, `['T', 'H', 'E', 'R'...etc]`
8. Join contents `T  H  E  R  E  D  C  A  R`

