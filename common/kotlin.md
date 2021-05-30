# 3. loops

# 3.1. for-loop (collection)

## code
```kotlin
val fruits = listOf("apple", "banana", "mango")
for (fruit in fruits) {
    println(fruit)
}
```

## output
```
apple
banana
mango
```

## description
- https://kotlinlang.org/docs/iterators.html
- https://kotlinlang.org/docs/control-flow.html#for-loops
- `forEach` 말고 그냥 `for` 쓰라는 듯 (https://kotlinlang.org/docs/coding-conventions.html#loops)

# 3.2. for-loop (with index)

## code
```kotlin
val fruits = listOf("apple", "banana", "mango")

// option 1
for (i in fruits.indices) {
    println("$i: ${fruits[i]}")
}

// option 2
for ((index, value) in fruits.withIndex()) {
    println("$index: $value")
}

// option 3 (for specific range)
for (i in 0..2) {  // [0, 2]
    println("$i: ${fruits[i]}")
}
```

## output
```
0: apple
1: banana
2: mango
```

## description
- https://kotlinlang.org/docs/control-flow.html#for-loops