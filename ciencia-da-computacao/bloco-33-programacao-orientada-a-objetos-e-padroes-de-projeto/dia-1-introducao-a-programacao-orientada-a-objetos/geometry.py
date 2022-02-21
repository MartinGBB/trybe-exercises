from statistics import geometric_mean


class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height


geometric = Rectangle(5, 6)
print(geometric.area())
