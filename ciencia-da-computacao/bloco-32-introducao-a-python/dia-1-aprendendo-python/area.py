PI = 3.14


def square(side):
    return side * side


def rectangle(length, width):
    return length * width


def circle(radius):
    return radius * PI * radius


if __name__ == "__main__":
    print("Area of square:", square(5))
    print("Area of rectangle:", rectangle(5, 5))
    print("Area of circle:", circle(10))
