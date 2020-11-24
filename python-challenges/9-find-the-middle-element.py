# 9th python challenge -Find the middle element

OfficalLink = 'https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/python'

# My first approach to the problem
# --> NO StackOverflow !!!
# --> NO YouTube !!!
# --> Docs allowed(MSDN and w3schools)


def gimme(input_array):
    middle = sorted(input_array)[1]
    return input_array.index(middle)

# Codewars best practice and clever solution


def gimme2(inputArray):
    # Implement this function
    return inputArray.index(sorted(inputArray)[1])


# Test
gimme([2, 3, 1])
gimme([5, 10, 14])
