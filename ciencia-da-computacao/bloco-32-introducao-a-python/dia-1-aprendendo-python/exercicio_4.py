#   Crie uma função que receba uma lista de nomes
#   e retorne o nome com a maior quantidade de caracteres.

names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def bigger_name(names):
    bigger = [0]
    for name in names:
        if len(name) > len(bigger):
            bigger = name
    print(bigger)


bigger_name(names)
