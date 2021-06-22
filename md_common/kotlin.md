# 1. types

# 1.1. basic types
## description
- https://kotlinlang.org/docs/basic-types.html

# 1.2. type checks and cast
## description
- https://kotlinlang.org/docs/typecasts.html


# 1.3. print type
## code
```kotlin
val fruits = listOf("apple", "banana", "mango")
println(fruits::class.simpleName)
```

## output
```
ArrayList
```

## description
- https://stackoverflow.com/a/56299599/16111308

# 3. loops

# 3.1. for-loop (collection)

## code
```kotlin
val fruits = listOf("apple", "banana", "mango")

// option 1
for (fruit in fruits) {
    println(fruit)
}

// option 2
fruits.forEach { fruit ->
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

# 3.2. for-loop (with index)

## code
```kotlin
val fruits = listOf("apple", "banana", "mango")

// option 1
for (i in fruits.indices) {
    println("$i: ${fruits[i]}")
}

// option 2
for ((i, fruit) in fruits.withIndex()) {
    println("$i: $fruit")
}

// option 3
fruits.forEachIndexed { i, fruit ->
    println("$i: $fruit")
}

// option 4 (for specific range)
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



# 5. collections

# 5.1. filter
# 5.2. groupby
## code
```kotlin
val numbers = listOf("one", "two", "three", "four", "five")
val grouped = numbers.groupBy { number -> number[0] }  // 첫 글자로 그룹핑
println(grouped)
```

## output
```
{o=[one], t=[two, three], f=[four, five]}
```

## description
- https://kotlinlang.org/docs/collection-grouping.html


# 10. etc

# 10.2. ternary operator

## code
```kotlin
val a = 10
val b = 20

val max = if (a > b) a else b  // If expression
println(max)
```

## output
```
20
```

## description
- https://kotlinlang.org/docs/control-flow.html
- if가 expression 이라서, 따로 3항 연산자 없음

# 10.3. coding convention
## description
- 공식 가이드 https://kotlinlang.org/docs/coding-conventions.html
- 공식 가이드 한글 번역 https://wnsgml972.github.io/kotlin/2020/11/28/kotlin-coding-convention/
- 안드로이드 공식 가이드 https://developer.android.com/kotlin/style-guide