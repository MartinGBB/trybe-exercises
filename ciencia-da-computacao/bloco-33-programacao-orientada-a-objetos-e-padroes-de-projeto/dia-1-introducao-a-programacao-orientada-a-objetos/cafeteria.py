class Item:
    def __init__(self, produto, preco, desconto):
        self.produto = produto
        self.preco = preco
        self.desconto = desconto


class Pedido:
    def __init__(self, cliente, items, preco, desconto):
        self.cliente = cliente
        self.pedido = items
        self.preco = preco
        self.desconto = desconto
        
