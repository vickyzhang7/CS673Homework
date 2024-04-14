string1=input("Enter the first list : ")
string2=input("Enter the second list : ")
result=[]
if len(string1)!= len(string2):
    print("Error: the length of the first list is different with the length of the second list")
else:
    for i in range(len(string1)):
        result.append(string1[i])
        result.append(string2[i])
    print(f"after the combine, the string is :{result}")