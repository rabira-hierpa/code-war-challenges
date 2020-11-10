# Fifth python challenge - Duplicate Encoder

OfficalLink = 'https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python'

# My first approach to the problem
# --> NO StackOverflow !!!
# --> NO YouTube !!!
# --> Docs allowed(MSDN and w3schools)


def duplicate_encode(word):
    word = word.casefold()
    encoded = list()
    for char in word:
        if word.count(char) > 1:
            encoded.append(')')
        else:
            encoded.append('(')
    return ''.join(encoded)


# Codewars best practice and clever solution

def duplicate_encode1(word):
    return "".join(["(" if word.lower().count(c) == 1 else ")" for c in word.lower()])


# Test
duplicate_encode("din")
duplicate_encode("recede")
duplicate_encode("Success")
duplicate_encode("(( @")
