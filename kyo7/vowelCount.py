def get_count(sentence):
    count = 0
    vowel = ["a", "o", "i", "u", "e"]
    for letter in sentence:
        if letter in vowel:
            count += 1
    return count