PI = 3.14


class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return self.radius * PI


calculate_circle = Circle(5)

print(calculate_circle.area())
