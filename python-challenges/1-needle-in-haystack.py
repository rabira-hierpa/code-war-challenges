# First python challenge - A Needle in the Haystack

OfficalLink = 'https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/python'

# My first approach to the problem
# --> NO StackOverflow !!!
# --> NO YouTube !!!
# --> Docs allowed(MSDN and w3schools)


def find_needle(haystack):
    for element in haystack:
        if element == 'needle':
            print(f'found the needle at position {haystack.index(element)}')
            return str('found the needle at position ' + str(haystack.index(element)))


# Codewars best practice and clever solution

def find_needle1(
    haystack): return 'found the needle at position %d' % haystack.index('needle')


# Tests
find_needle(['3', '123124234', None, 'needle',
             'world', 'hay', 2, '3', True, False])
find_needle(['283497238987234', 'a dog', 'a cat', 'some random junk',
             'a piece of hay', 'needle', 'something somebody lost a while ago'])
find_needle([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2,
             34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54])
