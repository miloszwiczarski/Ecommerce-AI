from fastapi import APIRouter
from backend.crud.user_crud import get_all_users
from backend.schemas.user_schema import UserRegisterSchema
from typing import List

router = APIRouter()

@router.get("/users", response_model=List[UserRegisterSchema])
def get_users():
    return get_all_users()
