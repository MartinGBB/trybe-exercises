PI = 3.14


class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return round(self.radius * PI, 2)

    def perimeter(self):
        return round(2 * PI * self.radius, 2)


calculate_circle = Circle(7)

print(f'Area do circulo: {calculate_circle.area()}')
print(f'Perimetro do circulo: {calculate_circle.perimeter()}')
