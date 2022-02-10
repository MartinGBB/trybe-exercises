#   Crie uma função que receba os três lado de um triângulo e informe qual
#   o tipo de triângulo formado ou "não é triangulo" , caso não seja possível
#   formar um triângulo.


def format_triangle(a, b, c):
    isTriangle = a + b > c and b + c > a and a + c > b
    if not isTriangle:
        return "Não é um triangulo"
    elif a == b == c:
        return "Triângulo Equilátero"
    elif a == b or b == c or c == a:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"


print(format_triangle(3, 2, 4))
