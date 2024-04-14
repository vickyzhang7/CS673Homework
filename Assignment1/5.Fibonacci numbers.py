a = 1
b = 1
result=[1,1]
for i in range(1,50):
    a=a+b
    result.append(a)
    b=b+a
    result.append(b)

print(f"The result of the first 100 Fibonacci numbers is {result}")

