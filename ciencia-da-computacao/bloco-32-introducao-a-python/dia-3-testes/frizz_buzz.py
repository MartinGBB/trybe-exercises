# Escreva um programa que retorne uma lista com os valores numéricos de 1 a N,
# mas com as seguintes exceções :
# Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
# Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz'

numbers = []


def frizz_buzz(n):
    for number in range(1, n + 1):
        if number % 3 == 0 and number % 5 == 0:
            numbers.append("FrizzBuzz")
        elif number % 3 == 0:
            numbers.append("Frizz")
        elif number % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(number)
    return numbers


frizz_buzz(30)
