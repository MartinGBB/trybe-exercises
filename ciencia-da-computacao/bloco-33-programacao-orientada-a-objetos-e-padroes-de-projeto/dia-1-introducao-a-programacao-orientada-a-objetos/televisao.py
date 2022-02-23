class Televisao:
    def __init__(self, on_off, ch_up, ch_down, vol_up, vol_down):
        self.on_off = on_off
        self.ch_up = ch_up
        self.down = ch_down
        self.vol_up = vol_up
        self.vol.down = vol_down

    def liga_tv(self):
        self.on_off = True
        print("Tv ligada")

    def desliga_tv(self):
        self.on_off = False
        print("Tv desligada")

