# 3. loops

# 3.1. for-loop (collection)

## code
```python
fruits = ["apple", "banana", "mango"]
for fruit in fruits:
    print(fruit)
```
## output
```
apple
banana
mango
```

## description
test description 1

# 3.2. for-loop (with index)

## code
```python
fruits = ["apple", "banana", "mango"]
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
```
## output
```
0: apple
1: banana
2: mango
```
## description
test description 2
multi-line


# 5. collections

# 5.1. filter
## code
```python
fruits = ["apple", "banana", "mango"]

# option 1: List Comprehension
result = [fruit for fruit in fruits if len(fruit) > 5]
print(result)

# option 2: filter
result2 = filter(lambda fruit: len(fruit) > 5, fruits)
print(list(result2))
```

## output
```
['banana']
```
## description
- Use Comprehensions instead of `map` and `filter`
- https://mechurak.tistory.com/35
