Learning objectives:
writting source code.
basic statements and expression.
working with numbers.
increasing your efficiency with functions.
working with comments.
making decisions on your code.
troubleshooting errors.
learning about other languages.
Course Notes:
Top 5 programming language (2021):

Java
Python
JavaScript
C++
C#
Variables and data types:

variables cannot be keyword.
variables names contain letters ,unmbers Underscores.
Spaces are not allowed.
variables names are case-sensetive.
in python:

cookies = "sugar"
print(cookies)

>>> sugar
in java

String cookies = "sugar"
System.out.print(cookies);

>>> sugar
numbers
2 + 3 
>>> 5
float: any number with decimal point. short for floating-point number
String can be:

Letters
Numbers
spaces
symbols
in python:

message = 'Hi there!'
print(message)

>>> Hi there!
comment

use it to make code read and organized

you can use it to ignore some code

like this:

string name = "eisa"

#print(name)
>>> 
note that did't print any thing as we use # ->comment in python

condtional code: Any expression that break down to either true or false 4 is equal to 4 * 4 result True

print("HI!")

name = input("Enter your name:")

if name == "eisa":
    print("this is a good name")
else
    print("this is bad guy")
this is an equality statement

Relational operator:

Symbol	Operation	Example
==	Equal to	3 == 3 true/false
!=	Equal to	3 != 3 true/false
>	Greater Than	3 > 5 true/false
<	Less Than	3 <> 5 true/false
>=	Greater Than or equal	3 > 5 true/false
<=	Less Than or equal	3 <> 5 true/false
simple condition using if:

if condition:
    body(do something)
else
    body(do something)
example in python:

plant = "Irises"

if plant == "Cacti":
    print(plant, "don't need a lot of water")
else:
    print(plant, "love water")

print("Thanks!")
Functions: are group of code, To run the code in a function, you must call the function.

def say_hello():
    print("Hello, friends!")

say_hello()
say_hello()
say_hello()
Function parameters and arguments

function_name(parameter)
function_call(argumemt)
def wash_car(amount_paid):
    if (amount_paid == 12):
        print("Wash with tri-color foam")
        print("Rinse twice")
        print("Dry with large blow dryer")

    if (amount_paid == 6):
        print("Wash with white foam")
        print("Rinse once")
        print("Air dry") 

wash_car(6) #this is call function
return statement consists of the return keyword and the value that the function should return.

def withdraw_money(current_balance, amount):
    if (current_balance >= amount):
        current_balance = current_balance - amount
        return current_balance

balance = withdraw_money(100, 80)

if (balance <= 50):
    print("We need to make a deposit")
else:
    print("Nothing to see here!")
Ex Fun in kotlin:

fun checkGrade(grade: String) {
    if(grade == "A")
    printIn("You aced the class!")
}
Course Link

Certifcate
