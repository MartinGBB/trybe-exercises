file = open("arquivo.txt", mode="w")

file.write("nome idade\n")
file.write("Maria - 45\n")
file.write("Pedro - 32\n")

print("Alberto - 20", file=file)

file.close()
