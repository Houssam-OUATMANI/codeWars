def number(lines: list) -> list:
    if len(lines) == 0:
        return lines
    newList = []
    i = 0
    while i < len(lines):
        newList.append(f"{i + 1}: {lines[i]}")
        i = i + 1

    return newList
