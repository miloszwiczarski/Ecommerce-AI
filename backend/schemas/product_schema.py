from pydantic import BaseModel

class ProductSchema(BaseModel):
    _id: int
    imagePath: str
    title: str
    price: float
    department: str
    category: str
