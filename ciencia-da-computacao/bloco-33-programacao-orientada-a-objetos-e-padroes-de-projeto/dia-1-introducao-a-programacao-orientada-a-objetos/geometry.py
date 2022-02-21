class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return self.width * 2 + self.height * 2


geometric = Rectangle(5, 10)
print(f'Area: {geometric.area()}')
print(f'Perimeter: {geometric.perimeter()}')
