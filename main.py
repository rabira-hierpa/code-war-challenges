# _______ python challenge -

OfficalLink = 'https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/python'

# My first approach to the problem
# --> NO StackOverflow !!!
# --> NO YouTube !!!
# --> Docs allowed(MSDN and w3schools)


def persistence(num):
    if "0" in str(num):
        return 1 
    count = 0
    product = multiply(num)
    result = [int(j) for j in str(product)]
    if len(result) > 1:
        count = count + 1
        while len(result) > 1:
            product = multiply(product)
            result = [int(j) for j in str(product)]
            count = count + 1
            if (len(result)) == 1:
                return count
    else:
        print(count)
        return count


def multiply(num):
    num = [int(x) for x in str(num)]
    product = 1
    for ele in num:
        product = product * ele
    return product


# Codewars best practice and clever solution
import operator
def persistence(n):
    i = 0
    while n>=10:
        n=reduce(operator.mul,[int(x) for x in str(n)],1)
        i+=1
    return i

# Test
persistence(39)
persistence(4)
persistence(25)
persistence(999)
persistence(190453)
persistence(10194)
persistence(10194)
