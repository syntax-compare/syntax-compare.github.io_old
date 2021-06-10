# 1. types

# 1.1. basic types

# 1.2. type checks and cast

# 1.3. print type
## code
```javascript
  const fruits = ["apple", "banana", "mango"];
  console.log(typeof fruits);
```
## output
```
> "object"
```

## description
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof




# 3. loops

# 3.1. for-loop (collection)
## code
```javascript
const fruits = ["apple", "banana", "mango"];

// option 1 (for...of)
for (const fruit of fruits) {
  console.log(fruit);
}

// option 2 (forEach)
fruits.forEach((fruit) => console.log(fruit));
```
## output
```
> "apple"
> "banana"
> "mango"
```

## description
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

# 4. string

# 4.1. string template

## code
```javascript
const fruit = "apple";
const sentence = `My daughter likes ${fruit}.`; // Use backtick(`)
console.log(sentence);
```
## output
```
> "My daughter likes apple."
```

## description
- Template literals (Template strings)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

# 4.2. split

## code
```javascript
  const multiLineText = `apple
banana
mango`;

  const fruits = multiLineText.split("\n");
  console.log(fruits);
```

## output
```
> Array ["apple", "banana", "mango"]
```

## description
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

# 5. collections

# 5.1. filter
## code
```javascript
const fruits = ["apple", "banana", "mango"];
const result = fruits.filter((fruit) => fruit.length > 5);
console.log(result);
```

## output
```
> Array ["banana"]
```
## description
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter