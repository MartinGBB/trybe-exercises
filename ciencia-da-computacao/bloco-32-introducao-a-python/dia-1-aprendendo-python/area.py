PI = 3.14


def square(side):
    return f"Area of square: {side * side}"


def rectangle(length, width):
    return f"Area of rectangle: {length * width}"


def circle(radius):
    return f"Area of circle: {radius * PI * radius}"


print(square(5))
print(rectangle(5, 5))
print(circle(10))
