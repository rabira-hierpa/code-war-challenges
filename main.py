# THird python challenge - Basic Mathematical Operations

OfficalLink = 'https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/python'

# My first approach to the problem
# --> NO StackOverflow !!!
# --> NO YouTube !!!
# --> Docs allowed(MSDN and w3schools)


def row_sum_odd_numbers(n):
    sums = 0
    if n == 1:
        return 1
    else:
        for i in range(n):
            if i % 2 != 0:
                sums += i
    return sums

# Codewars best practice and clever solution


# Test
print(row_sum_odd_numbers(1))
print(row_sum_odd_numbers(2))
print(row_sum_odd_numbers(13))
print(row_sum_odd_numbers(19))
print(row_sum_odd_numbers(41))
