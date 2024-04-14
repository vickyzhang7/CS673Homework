while True:
    user_input=input("Please input a string, if you want to quit please type 'q' : ")
    input_modified=user_input.lower()
    input_reverse=input_modified[::-1]
    if input_modified=="q":
        print("The program exits")
        break
    
    if input_modified == input_reverse:
        print(f"The string '{user_input}' is a palindrome")
    else:
        print(f"The string '{user_input}' is not a palindrome")

    
