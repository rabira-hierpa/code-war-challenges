# 7th python challenge - Keep hydrated

import math
OfficalLink = 'https://www.codewars.com/kata/582cb0224e56e068d800003c/train/python'

# My first approach to the problem
# --> NO StackOverflow !!!
# --> NO YouTube !!!
# --> Docs allowed(MSDN and w3schools)


def litres(time):
    return math.floor(time*0.5)

# Codewars best practice and clever solution


def litres2(time):
    return time // 2


# Test
litres(2)
litres(1.4)
litres(12.3)
litres(0.82)
litres(11.8)
litres(1787)
litres(0)
