#   Escreva um programa que receba vários números naturais e calcule a soma
# desses valores. Caso algum valor da entrada seja inválido, por exemplo uma
# letra, uma mensagem deve ser exibida, na saída de erros, no seguinte formato:
# "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve
# imprimir a soma dos valores válidos.

import sys


input_numbers = input("insira os valores separados por espaços: ")
numbers = input_numbers.split(" ")
total = 0

for number in numbers:
    if not number.isdigit():
        print(
            f"Erro ao somar valores, {number} é um valor inválido",
            file=sys.stderr,
        )
    else:
        total += int(number)
print(total)
