## 7kyu - Range Bit Counting

### Question
You are given two numbers `a` and `b` where `0 ≤ a ≤ b`. Imagine you construct an array of all the integers from `a` to `b` inclusion. You need to count the number of `1`s in the binary representations of all the numbers in the array.

#### Examples input/output:

```
for a =2 and b = 7, the output should be `11`.  

Given a =2 and b = 7 the array is:[2,3,4,5,6,7]. Converting the numbers to binary, we get [10,11,100,101,110,111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.
```

<hr>

### Approach
Initial thoughts
1. - will need to loop from first integer to second integer populating an array with each number.
2. - convert integers to binary... must be some built JS method.. Will look around base value, ie numbers are base 10, binary is base 2.
3. - loop through array of binary counting the 1's and total them.

The JS built-in-method `toString([radix])` will return a string value in a specified radix (base), `toString(2)` converts the decimal number to binary number.

WARNING!!
See solution2, need to be aware that the initial argument could be 0, thus the match function for 1's will return null and we will get an error as we won't be able to read property 'length' of null. 
The solution is to put a ternary operator in and if 0 is given as the first argument return 1 instead.

ALTERNATIVE!!
Instead of doing a match on the 1's just use `replace()` method to replace any 0's with a blank and then we are left with 1's which we can get the length property of, see solution 3.

#### Solution 1

This is my initial attempt, with hindsight a bit long winded but it works and can be re-factored.

We create a blank array which will be populated with the results (in binary) of looping through the range of integers from the first passed in argument up to and including the second one.  
We then convert this array to a single string, onto which we use regex to determine the number of 1's.


#### Solution 2

This is a much more compact solution and omits the need for an array and instead we use a running total for the count which we return at the end of the loop.


#### Solution 3

This is the best solution, does away with the ternary operator and thus overall easier to read and comprehend.