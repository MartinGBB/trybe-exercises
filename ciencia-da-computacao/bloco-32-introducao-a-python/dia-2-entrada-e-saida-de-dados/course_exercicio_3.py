#  Dado um arquivo contendo estudantes e suas respectivas notas, escreva um
# programa que lê todas essas informações e filtre mantendo somente as pessoas
# que estão reprovadas, e escreva seus nomes em outro arquivo. A nota miníma
# para aprovação é 6.

file = open("notas.txt", mode="r")
reprovados = []

for nota in file:
    if int(nota.split()[1]) < 6:
        reprovados.append(nota.split()[0])
print(reprovados)


file.close()
