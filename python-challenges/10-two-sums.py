# 10th python challenge -Two sum

OfficalLink = 'https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/python'

# My first approach to the problem
# --> NO StackOverflow !!!
# --> NO YouTube !!!
# --> Docs allowed(MSDN and w3schools)


def two_sum(numbers, target):
    for idx, val in enumerate(numbers):
        if idx > 0 and idx < len(numbers) - 1:
            prev = numbers[idx - 1]
            next_ = numbers[idx + 1]
            if prev + next_ == target:
                return [numbers.index(prev), numbers.index(next_)]
            elif prev + val == target:
                return [numbers.index(prev), idx]
            elif next_ + val == target:
                return [idx, numbers.index(next_)]


# Codewars best practice and clever solution
def two_sum2(nums, t):
    for i, x in enumerate(nums):
        for j, y in enumerate(nums):
            if i != j and x + y == t:
                return [i, j]


# Test
two_sum([1, 2, 3], 4)
two_sum([1234, 5678, 9012], 14690)
two_sum([2, 2, 3], 4)
