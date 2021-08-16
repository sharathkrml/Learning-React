map method
- goes over each element in an array and apply a transformation specified in function body


<code>var array1 = [2,3,4,5,6]
var map1 = array1.map(x=>x*3)
console.log(map1)
Array(5) [ 6, 9, 12, 15, 18 ]</code>

## refactor JSX to separate Component
1. remove JSX from PersonList to Person.js
1. Pass person object through map function to Person Function in Person.js
1. In function Person,destructure props in parameter and return JSX from there