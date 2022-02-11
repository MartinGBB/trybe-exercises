import random;

aletory_number = random.randint(1, 10)
guess = ""

while guess != aletory_number:
    guess = int(input("adivine o numero "))
    if guess != aletory_number:
        print(f"tente novamente")

print("Parabéns, o numero era:", guess)
