#    Calcule a média aritmética dos valores contidos em uma lista.

list = [8, 9, 10, 11, 16, 17, 6]


def arithmetic_average(valors):
    total = 0
    for valor in valors:
        total += valor
    return total // len(valors)


print(arithmetic_average(list))
