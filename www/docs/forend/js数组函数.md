[19 JavaScript Array Methods Everyone Needs to Know](https://dev.to/opensourcee/17-javascript-array-methods-everyone-needs-to-know-1j35)

## Adding and Removing Elements

### push()

Adds one or more elements to the end of an array and returns the new length of the array.

```js
let fruits = ["apple", "banana"];
fruits.push("cherry");
// ['apple', 'banana', 'cherry']
```

### pop()

Removes the last element from an array and returns that element.

```js
let fruits = ["apple", "banana", "cherry"];
let last = fruits.pop();
// 'cherry', now fruits = ['apple', 'banana']
```

### shift()

Removes the first element from an array and returns that element.

```js
let fruits = ["apple", "banana", "cherry"];
let first = fruits.shift();
// 'apple', now fruits = ['banana', 'cherry']
```

### unshift()

Adds one or more elements to the beginning of an array and returns the new length of the array.

```js
let fruits = ["banana", "cherry"];
fruits.unshift("apple");
// ['apple', 'banana', 'cherry']
```

## Searching and Slicing

### indexOf()

Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```js
let fruits = ["apple", "banana", "cherry"];
let index = fruits.indexOf("banana");
// 1
```

### includes()

Determines whether an array includes a certain element, returning true or false as appropriate.

```js
let fruits = ["apple", "banana", "cherry"];
let hasApple = fruits.includes("apple");
// true
```

### slice()

Returns a shallow copy of a portion of an array into a new array object.

> 如两个数组都包含了一个对象的引用。当对象的属性改变时，则两个数组中的对应元素都会随之改变。

```js
let fruits = ["apple", "banana", "cherry"];
let someFruits = fruits.slice(0, 2);
// ['apple', 'banana']
```

## Reordering and Joining

### reverse()

Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```js
let fruits = ["apple", "banana", "cherry"];
fruits.reverse();
// ['cherry', 'banana', 'apple']
```

### concat()

Merges two or more arrays. This method does not change the existing arrays but instead returns a new array.

```js
let fruits = ["apple", "banana"];
let moreFruits = ["cherry", "date"];
let allFruits = fruits.concat(moreFruits);
// ['apple', 'banana', 'cherry', 'date']
```

### join()

Joins all elements of an array into a string and returns this string.

```js
let fruits = ["apple", "banana", "cherry"];
let result = fruits.join(", ");
// 'apple, banana, cherry'
```

### lastIndexOf()

Returns the last index at which a given element can be found in the array, or -1 if it is not present.

```js
let numbers = [1, 2, 3, 2, 1];
numbers.lastIndexOf(2);
// 3
```

## Looping and Iterating

### forEach()

Executes a provided function once for each array element.

```js
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));
// 'apple'
// 'banana'
// 'cherry'
```

### map()

Creates a new array with the results of calling a provided function on every element in the calling array.

```js
let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
// [1, 2, 3]
```

### filter()

Creates a new array with all elements that pass the test implemented by the provided function.

```js
let numbers = [1, 4, 9];
let bigNumbers = numbers.filter((number) => number > 5);
// [9]
```

### reduce()

Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// 10
```

### every()

Tests whether all elements in the array pass the test implemented by the provided function. Returns a Boolean.

```js
let numbers = [1, 2, 3, 4];
let allPositiveNumbers = numbers.every((number) => number > 0);
// true
```

### find()

Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

```js
let numbers = [1, 5, 10, 15];
let found = numbers.find(function (element) {
  return element > 9;
});
// 10
```

### toString()

Returns a string representing the specified array and its elements.

```js
let fruits = ["apple", "banana", "cherry"];
let result = fruits.toString();
// 'apple,banana,cherry'
```
