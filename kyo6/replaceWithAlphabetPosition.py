import re


def alphabet_position(text: str):
    text = text.lower()
    text = re.findall("[a-z]", text)
    alphabet_positions = ""
    dico = {}
    a = 97
    for i in range(1, 27):
        dico[chr(a)] = i
        a = a + 1

    for letter in text:
        alphabet_positions += (str(dico[letter]) + " ")

    return alphabet_positions.strip()
