class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        return len(self.data)

    def __str__(self):
        return str(self.data)
      
    def get(self, index):
        return self.data[index]
    
    def set(self, index, value):
        self.data.insert(index, value)

array = Array()
array.set(0, "Martin")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Marcos")
array.set(4, "Ramona")

index = 0

while index < len(array):
    print("Posicao:", index, "Nome:", array.get(index))
    index += 1