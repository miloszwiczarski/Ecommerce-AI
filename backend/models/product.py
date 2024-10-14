class Product:
    def __init__(self, _id: int, imagePath: str, title: str, price: float, department: str, category: str):
        self._id = _id
        self.imagePath = imagePath
        self.title = title
        self.price = price
        self.department = department
        self.category = category
