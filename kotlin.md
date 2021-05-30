# 3. loops

# 3.1. for-loop (iterate collection)

## code
```kotlin
val numbers = listOf("one", "two", "three")
for (item in numbers) {
    println(item)
}
```

## output
```
one
two
three
```

## description
테스트 디스크립션
<https://kotlinlang.org/docs/iterators.html>


# 3.2. for-loop (iterate collection with index)

## code
```kotlin
val numbers = listOf("one", "two", "three")
for ((index, value) in numbers.withIndex()) {
    println("$index: $value")
}
```

## output
```
0: one
1: two
2: three
```

## description