class Televisao:
    def __init__(self, status):
        self.status = status
        self.canal = 5
        self.volumen = 5
        self.taxa_vol = 2

    def status_tv(self):
        if self.status is True:
            print("Tv ligada")

        if self.status is False:
            print("Tv desligada")

    def aumentar_volumem(self):
        if self.status is True:
            self.volumen += self.taxa_vol
            print(f"Aumentar volumen: {self.volumen}")
        else:
            print("por favor, ligue a TV")

    def diminuir_volumem(self):
        if self.status is True:
            self.volumen -= self.taxa_vol
            print(f"Diminuir volumen: {self.volumen}")
        else:
            print("por favor, ligue a TV")

    def mudar_canal(self, canal_novo):
        if self.status is True:
            print(f"Canal antigo: {self.canal}")
            self.canal = canal_novo
            print(f"Novo canal: {self.canal}")
        else:
            print("por favor, ligue a TV")


tv = Televisao(True)

vol_up = tv.aumentar_volumem()
vol_down = tv.diminuir_volumem()
novo_canal = tv.mudar_canal(8)

print(vol_down)
