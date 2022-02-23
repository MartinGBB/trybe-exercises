class Televisao:
    def __init__(
        self,
        on_off,
        ch_up,
        ch_down,
        ch_atual,
        vol_atual
    ):
        self.on_off = on_off
        self.ch_up = ch_up
        self.ch_down = ch_down
        self.ch_atual = ch_atual
        self.vol_up = vol_up
        self.vol.down = vol_down
        self.vol_atual = vol_atual
        self.taxa_vol = 10

    def liga_tv(self):
        self.on_off = True
        print("Tv ligada")

    def desliga_tv(self):
        self.on_off = False
        print("Tv desligada")

    def aumentar_volumem(self):
        self.vol_atual += self.taxa_vol

    def diminuir_volumem(self):
        self.vol_atual -= self.taxa_vol

