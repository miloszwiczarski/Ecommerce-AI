from pydantic import BaseModel

class DepartmentSchema(BaseModel):
    id: int
    departmentName: str
    categories: str  # Categories as a comma-separated string

    class Config:
        orm_mode = True
