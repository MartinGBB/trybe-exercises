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
      nome,
      pv_max,
      pv_atual,
      pm_max,
      pm_atual,
      atqf,
      atqm,
      dfs
    ):
