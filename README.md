[![Build](https://github.com/laststance/utility-collective/actions/workflows/build.yml/badge.svg)](https://github.com/laststance/utility-collective/actions/workflows/build.yml)
[![Typecheck](https://github.com/laststance/utility-collective/actions/workflows/typecheck.yml/badge.svg)](https://github.com/laststance/utility-collective/actions/workflows/typecheck.yml)
[![Lint](https://github.com/laststance/utility-collective/actions/workflows/lint.yml/badge.svg)](https://github.com/laststance/utility-collective/actions/workflows/lint.yml)
[![Test](https://github.com/laststance/utility-collective/actions/workflows/test.yml/badge.svg)](https://github.com/laststance/utility-collective/actions/workflows/test.yml)

# React Node Utils

Place for Storing useful code fragments from especially OSS library.

```js
Clone Object
// Spread Method
let clone = { ...userDetails }

// Object.assign() Method
let clone = Object.assign({}, userDetails)

// JSON.parse() Method
let clone = JSON.parse(JSON.stringify(userDetails))
Array Filter
let newArray = array.filter(item => item > 10)
Array Map
let newArray = array.map(item => item + 10)
Array Find

let itemWithValue10 = array.find(item => item  === 10)
Array Find Index
let index = array.findIndex(item => item  === 10)
Array add item at the end
array.push(10)
Array add item at the start
array.unshift(10)
Array remove item from the end
array.pop()
Array remove item from the start
array.shift()
Array remove item at particular index
array.splice(index, 1)
Copy Array
let newArray = [...array];
```
