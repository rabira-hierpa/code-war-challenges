# Second python challenge - Basic Mathematical Operations

OfficalLink = 'https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/python'

# My first approach to the problem
# --> NO StackOverflow !!!
# --> NO YouTube !!!
# --> Docs allowed(MSDN and w3schools)


def basic_op(operator, value1, value2):
    if operator == '+':
        return value1 + value2
    elif operator == '-':
        return value1 - value2
    elif operator == '*':
        return value1 * value2
    elif operator == '/':
        if value2 > 0:
            return value1 / value2
    else:
        print("Invalid operator")

# Codewars bes practice and clever solution


def basic_op1(operator, value1, value2):
    return eval("{}{}{}".format(value1, operator, value2))


# Test

print(basic_op1('+', 4, 7))
print(basic_op1('-', 15, 18))
print(basic_op1('*', 5, 5))
print(basic_op1('/', 49, 7))
