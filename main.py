# Third python challenge - Sum of odd numbers

OfficalLink = 'https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/python'

# My first approach to the problem
# --> NO StackOverflow !!!
# --> NO YouTube !!!
# --> Docs allowed(MSDN and w3schools)


def row_sum_odd_numbers(n):
    return n ** 3

# Codewars best practice and clever solution


def row_sum_odd_numbers2(n):
    if type(n) == int and n > 0:
        return n**3
    else:
        return "Input a positive integer"


# Test
print(row_sum_odd_numbers(1))
print(row_sum_odd_numbers(2))
print(row_sum_odd_numbers(13))
print(row_sum_odd_numbers(19))
print(row_sum_odd_numbers(41))
