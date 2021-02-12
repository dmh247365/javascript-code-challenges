## 7kyu - Convert the score

### Question
You are working at a lower league football  stadium and you've been tasked with automating the scoreboard.

The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!.

eg, `The score is four nil` should return `[4,0]`

Either teams score has a range of 0-9, and the ref won't say the same string every time eg,

```
"new score: two three"

"two two"

"Arsenal just conceded another goal, two nil"
```

#### Examples input/output:

```js
scoreboard("The score is four nil") => [4,0]);
scoreboard("new score, two three") => [2,3]);
scoreboard("two one") => [2,1]);
scoreboard("Arsenal just conceded another goal, two nil") => [2,0]);
```

<hr>

### Approach
Blah blah blah  

#### Solution 1

Use 

#### Solution 2

Use  