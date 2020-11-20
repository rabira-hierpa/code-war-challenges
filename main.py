# 8th python challenge - Reverse words

OfficalLink = 'https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/python'

# My first approach to the problem
# --> NO StackOverflow !!!
# --> NO YouTube !!!
# --> Docs allowed(MSDN and w3schools)


def reverse_words(text):
    return ' '.join([words[::-1] for words in text.split(' ')])

# Codewars best practice and clever solution
# Is identical to my solution


# Test
reverse_words('The quick brown fox jumped over the lazy dog.')
reverse_words('apple')
reverse_words('a b c d')
reverse_words('double  spaced  words')
