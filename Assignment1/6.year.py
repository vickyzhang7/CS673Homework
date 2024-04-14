year_input = input("Enter a year: ")
if year_input.isdigit():
    year=int(year_input)
    if year%400==0:
        print(f" {year} is a leap year")

    elif (year%4==0) and (year%100!=0):
        print(f" {year}  is a leap year")

    else:
        print(f" {year}  is not a leap year")
else:
    print(" Enter the correct format of the year. It should be an integer.")