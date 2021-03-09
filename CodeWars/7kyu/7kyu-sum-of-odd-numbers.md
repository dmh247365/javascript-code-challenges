## 7kyu - Sum of odd numbers

### Question
Given the triangle of consecutive odd numbers:

```
            1
         3     5
      7     9      11
   13    15    17     19
21    23    25     27    29
```

calculate the row sums of this triangle from the row index(starting at index 1) eg:

#### Examples input/output:
```js
rowSumOddNumbers(1) => 1
rowSumOddNumbers(2) => 8 // 3 + 5
rowSumOddNumbers(4) => 64 // 13 + 15 + 17 + 19
rowSumOddNumbers(5) => 125 // 21 + 23 + 25 + 27 + 29
```

<hr>

### Approach
hmmmm this is really a mathematical problem rather and thus their will be undoubtedly a formula, time to google!!!
The answer is simple to do `n*n*n` where n is the row number we pass in.

#### Solution 1

Was about to jump head first into some type of loop, with a total of the odd numbers etc, but then realised it a maths problem and as such the internet will provide a simple solution. 
