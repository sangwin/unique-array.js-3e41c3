
# Remove Duplicate Items from an Array in JavaScript

## Overview

This example demonstrates three ways to remove duplicate values from a JavaScript array while preserving the original order of unique elements.

## Method 1: Using Set

The `Set` object stores unique values, and the spread operator converts it back into an array.

```javascript
let array = ['a', 'g', 'a', 5, 's', 's', 5, 3];
let uniqueArray = [...new Set(array)];

console.log(uniqueArray);
```

## Method 2: Using filter() and indexOf()

The `filter()` method keeps only the first occurrence of each value by checking its index with `indexOf()`.

```javascript
let array = ['a', 'g', 'a', 5, 's', 's', 5, 3];

let uniqueArray = array.filter((value, index) => {
    return array.indexOf(value) === index;
});

console.log(uniqueArray);
```

## Method 3: Using forEach() and includes()

The `forEach()` method iterates through the array, while `includes()` checks whether a value already exists in the result.

```javascript
let array = ['a', 'g', 'a', 5, 's', 's', 5, 3];

let uniqueArray = [];

array.forEach((value) => {
    if (!uniqueArray.includes(value)) {
        uniqueArray.push(value);
    }
});

console.log(uniqueArray);
```

## Output

All three methods produce the same result:

```text
['a', 'g', 5, 's', 3]
```

## Comparison

| Method | Approach | Best For |
|---|---|---|
| `Set` | Removes duplicates directly | Simple and concise solutions |
| `filter()` + `indexOf()` | Keeps first occurrences | Understanding array methods |
| `forEach()` + `includes()` | Builds a unique array manually | Explicit iteration logic |

## Recommendation

Use **`[...new Set(array)]`** for most cases because it is concise, readable, and efficient for removing duplicate primitive values.

## Author

**Sangwin Gawande**

Website: [https://sangw.in](https://sangw.in)

---

Cheers!!
