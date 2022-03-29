class Array:
    def __int__(self):
        self.data = []

    def __len__(self):
        return len(self.data)

    def __str__(self):
        return str(self.data)
      
    def get(self, index):
        return self.data[index]
    
    def set(self, index, value):
        return self.data.insert(index, value)
