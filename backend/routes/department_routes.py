from fastapi import APIRouter
from crud.department_crud import get_all_departments
from schemas.department_schema import DepartmentSchema
from typing import List

router = APIRouter()

@router.get("/departments", response_model=List[DepartmentSchema])
def get_departments():
    return get_all_departments()
