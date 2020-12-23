# 11th python challenge - Extract the domain name from a URL

import re as regex
OfficalLink = 'https://www.codewars.com/kata/514a024011ea4fb54200004b/train/python'

# - My first approach to the problem
# ! NO StackOverflow !!! 
# ! NO YouTube !!!
# * Docs allowed(MSDN and w3schools)


def domain_name(url):
    domain = regex.split('\A[(https?)://(w{3})]+', url)
    if domain[0] != '':
        print(domain[0].split('.')[0])
    elif len(domain) > 1:
        print(domain[1].strip('.').split('.')[0])
    # domain = domain[1].split('.')
    # if domain[0] != '' or len(domain) == 1:
    #     print(domain[0])
    # elif len(domain) > 1:
    #     print(domain[1])
# Codewars best practice and clever solution


# Test
domain_name("http://google.com")
domain_name("http://google.co.jp")
domain_name("www.xakep.ru")
domain_name("https://youtube.com")
domain_name('https://123.net')
domain_name('https://hypen-site.org')
domain_name("http://github.com/carbonfive/raygun")
domain_name("http://www.zombie-bites.com")
domain_name("https://www.cnet.com")
domain_name('icann.org')
domain_name('hypen-site.com')
