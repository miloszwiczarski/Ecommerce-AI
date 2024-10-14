from fastapi import APIRouter
from backend.crud.product_crud import get_all_products
from backend.schemas.product_schema import ProductSchema
from typing import List

router = APIRouter()

@router.get("/products", response_model=List[ProductSchema])
def get_products():
    return get_all_products()
