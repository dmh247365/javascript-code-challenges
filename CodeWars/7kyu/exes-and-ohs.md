## 7kyu - Exes and Ohs

### Question
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

#### Examples input/output:

```js
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true //  when no 'x' and 'o' present should return true
XO("zzoo") => false
```

<hr>

### Approach
We need to standardize the input, ie make it all the same case, we can either use `regex` or function such as `toLowerCase()`.

We then want an array with the 'x's and one with the 'y's and we can then simple use a comparison of their respective lengths.  

#### To run solutions
just navigate to the relevant folder and type $node <filename>


#### Solution 1

Use `str.match(regexp)` will return an array of results, if no matches are found then `null` will be returned.  

Use `regex flags` of:-  
* g (global) we don't want to return after the first match.  
* i (insensitive) ignore differences in case.  

We need to guard against risk of `null` for the returned value of `str.match(regexp)` as an error will occur when trying to do null.length. We simply need to use the `&& (AND)` logical operator.  


#### Solution 2

Use `toLowerCase` method to convert the string.  

Use `split()` method, passing in `''` to create an array of the individual characters in the string.

Use `filter` method to create a new array of 'x's or 'y's, we don't have to worry about `null` as even if no elements are passed in, we will just have a blank array, so `array.length` would just return `0`.



