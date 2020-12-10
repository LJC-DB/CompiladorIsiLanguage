import sys
from antlr4 import *
from isiLanguageLexer import *
from isiLanguageParser import *
from antlr4.InputStream import *


def main():
    input_stream = FileStream('./programa.isi')
    lexer = isiLanguageLexer(input_stream)
    stream = CommonTokenStream(lexer)
    parser = isiLanguageParser(stream)
    tree = parser.prog()

if __name__ == '__main__':
    main()


# class FileStream(InputStream):

#     def __init__(self, fileName, encoding='ascii', errors='strict'):
#         self.fileName = fileName
#         # read binary to avoid line ending conversion
#         with open(fileName, 'rb') as file:
#             bytes = file.read()
#             data = codecs.decode(bytes, encoding, errors)
#             super(type(self), self).__init__(data)
