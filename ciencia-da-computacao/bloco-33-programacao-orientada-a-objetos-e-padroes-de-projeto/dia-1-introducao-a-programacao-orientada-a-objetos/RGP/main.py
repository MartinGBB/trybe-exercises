from personagem import Personagem

humano = Personagem("humano", 20, 20, 10, 10, 3, 1, 2)
lobo = Personagem("lobo", 10, 10, 0, 0, 4, 0, 0)
mago = Personagem("mago", 25, 25, 35, 35, 1, 9, 1)
orc = Personagem("orc", 25, 25, 0, 0, 8, 0, 2)

while orc.alive == True and mago.alive == True:
    print(orc)
    print(mago)
    mago.ataque_magico(orc)
    orc.ataque_fisico(mago)
