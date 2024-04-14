print("\n Multiplication table from 1 to 12\n")

print("     ", end="")
for i in range(1, 13):
    print(f"{i:4}", end="")
print("\n" + " " * 5 + "-" * 52)

for i in range(1, 13):
    print(f"{i:2} |", end="")
    for j in range(1, 13):
        k = i*j
        print(f"{k:4}", end="")
    print("\n" + " " * 5 + "-" * 52)
