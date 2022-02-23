# Implemente a classe Personagem.
#
# Legenda:
# pv = pontos de vida
# pm = pontos de mana
# atqf = ataque físico
# atqm = ataque mágico
# dfs = defesa
#
# São atributos de um personagem:
# nome, pv_max, pv_atual, pm_max, pm_atual, atqf, atqm, dfs
#
# A classe personagem deve ser capaz de beber poçao de vida
# fazendo com que seus pontos de vida atuais retornem ao valor máximo
#
# A classe personagem deve ser capaz de beber poçao de mana
# fazendo com que seus pontos de mana retornem ao valor máximo
#
# A classe personagem deve ser capaz de descansar fazendo com que
# seus pontos de vida e mana retornem aos valores máximos
#
# A classe personagem deve ser capaz de realizar um ataque físico
# em outro personagem seguindo a seguinte regra de negócio:
# dano >= 0 e dano = ataque físico do atacante - defesa do defensor
# o dano então é subtraído dos pontos de vida atuais do defensor, se
# pv_atual <= 0 o personagem defensor é abatido e isso é impresso na tela.
#
# A classe personagem deve ser capaz de realizar um ataque mágico
# em outro personagem seguindo a seguinte regra de negócio:
# atacante diminui seus pontos de mana equivalente ao seu atqm
# dano >= 0 e dano = ataque mágico do atacante o dano então
# é subtraído dos pontos de vida do defensor, se pv_atual <= 0
# o personagem defensor é abatido e isso é impresso na tela.


class Personagem:
    def __init__(
        self,
        nome: int,
        pv_max: int,
        pv_atual: int,
        pm_max: int,
        pm_atual: int,
        atqf: int,
        atqm: int,
        dfs: int,
    ):
        self.nome = nome
        self.pv_max = pv_max
        self.pv_atual = pv_atual
        self.pm_max = pm_max
        self.pm_atual = pm_atual
        self.atqf = atqf
        self.atqm = atqm
        self.dfs = dfs
        self.alive = True

    def __str__(self):
        return f"O {self.nome} tem {str(self.pv_atual)} de vida"

    def beber_pocao_vida(self):
        self.pv_atual = self.pv_max

    def beber_pocao_mana(self):
        self.pm_atual = self.pm_max

    def descansar(self):
        self.beber_pocao_vida()
        self.beber_pocao_mana()

    def verifica_se_morreu(self, defensor):
        if defensor.pv_atual <= 0:
            defensor.alive = False
            print(f"O {defensor.nome} morreu")

    def causa_dano(self, dano, defensor):
        if dano >= 0:
            defensor.pv_atual -= dano

    def ataque_fisico(self, defensor):
        dano = self.atqf - defensor.dfs
        self.causa_dano(dano, defensor)
        self.verifica_se_morreu(defensor)

    def ataque_magico(self, defensor):
        if self.pm_atual >= self.atqm:
            self.pm_atual -= self.atqm
            dano = self.atqm - defensor.dfs
            self.causa_dano(dano, defensor)
            self.verifica_se_morreu(defensor)
