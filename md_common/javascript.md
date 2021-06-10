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