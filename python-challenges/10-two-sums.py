# 10th python challenge -Two sum

from typing import List


OfficalLink = 'https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/python'

# * My first approach to the problem
# ! --> NO StackOverflow !!!
# ! --> NO YouTube !!!
# * --> Docs allowed(MSDN and w3schools)


def two_sum(numbers, target):
    for idx, val in enumerate(numbers):
        if len(numbers) == 2 and numbers[idx] + numbers[idx+1] == target:
            return [0, 1]
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

# Leetcode solution
# Time complexity: O(n)
# Space complexity: O(n)
# Approach - one-pass hash table - uses complement approach i.e instead of adding each number to the target
# and checking if the complement exists in the array, we can check if the complement exists in the hashmap
# and then return the indices else add it to the hashmap


def two_sum(nums: List[int], target: int) -> List[int]:
    hashmap = {}
    for i in range(len(nums)):
        complement = target - nums[i]
        if complement in hashmap:
            return [i, hashmap[complement]]
        hashmap[nums[i]] = i


# Test
two_sum([1, 2, 3], 4)
two_sum([1234, 5678, 9012], 14690)
two_sum([2, 2, 3], 4)
