class Item:
    def __init__(self, product, preco):
        self.product = product
        self.preco = preco


class Pedido:
    def __init__(self, cliente, items, desconto):
        self.cliente = cliente
        self.items = items
        self.desconto = desconto

    def calcula_total(self):
        total = 0
        for item in self.items:
            total += item.preco
        return total

    def total_desconto(self):
        return self.calcula_total() * (1 - self.desconto)


sanduba = Item("X-tudo", 16.9)
guarana = Item("Guarana", 5.9)
fritas = Item("Fritas crocantes", 10.9)

pedido_mesa_1 = Pedido("Cristiano", [sanduba, guarana, fritas], 0.1)

print(f'Total: R$ {pedido_mesa_1.total_desconto()}')
