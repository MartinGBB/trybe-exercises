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

print(array.get(0))
print(array.get(1))