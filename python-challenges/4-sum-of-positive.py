# Forth python challenge - Sum of positive

OfficalLink = 'https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/python'

# My first approach to the problem
# --> NO StackOverflow !!!
# --> NO YouTube !!!
# --> Docs allowed(MSDN and w3schools)


def positive_sum(arr):
    sums = 0
    for i in arr:
        if i >= 0:
            sums = sums + i
    return sums


# Codewars best practice and clever solution

def positive_sum2(arr):
    return sum(x for x in arr if x > 0)


# Test
positive_sum([1, 2, 3, 4, 5])
positive_sum([1, -2, 3, 4, 5])
positive_sum([-1, 2, 3, 4, -5])
