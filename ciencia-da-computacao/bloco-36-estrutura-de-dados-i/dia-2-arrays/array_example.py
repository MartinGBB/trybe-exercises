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
array.set(0, "Ana")
array.set(1, "Shirley")
array.set(1, "Marcos")
array.set(1, "Ramona")

index = 0

while index < len(array):
    print("Posicao:", index, "Nome:", array.get(index))
    index += 1