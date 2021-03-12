## 7kyu - Find the next perfect square!

### Question
You might know some pretty large perfect squares. but what about the NEXT one?  
Complete the `findNextSquare` method that finds the next integral perfect square after one is passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.  

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter os positive.

#### Examples input/output:

```js
findNextSquare(121) => returns 144
findNextSquare(625) => returns 676
findNextSquare(114) => returns -1 // since 114 is not perfect
```

<hr>

### Approach
We need to utilise the `Math Object` which has a number of built in properties and methods, the two that will be of use are:-  
The `Math.sqrt()` method will return the square root of what is passed in.  
The `Math.pow()` method will return the square of what is passed in.  
Finally we can use either a `conditional (ternary) operator` or an `if statement` to validate the argument has an integer and if so return the next one.


#### To run solutions
just navigate to the relevant folder and type $node <filename>


#### Solution 1
We can use the ternary operator:-  
 `condition` ? `expression if truthy` : `expression if falsy`.

We can use the `Modulus` arithmetic operator, ie:-  
 * 1.5 % 1 --> 0.5 which is truthy
 * 2 % 1 --> 0 which is falsy

#### Solution 2
The `Number.isInteger(value)` will return a `Boolean` indicating whether or not the given value is an integer.
