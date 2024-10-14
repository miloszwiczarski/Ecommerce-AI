from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from pydantic import BaseModel, EmailStr

app = FastAPI()

# Dodaj middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Możesz również ograniczyć do określonych domen
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Model produktu
class Product(BaseModel):
    _id: int
    imagePath: str
    title: str
    price: float
    department: str  # Dodajemy pole department
    category: str  # Dodajemy pole category

# Model działu (departments)
class Department(BaseModel):
    id: int
    departmentName: str
    categories: str  # kategorie oddzielone przecinkami

# Model użytkownika
class User(BaseModel):
    id: int
    name: str
    email: EmailStr
    password: str

class UserRegister(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str


# Przykładowa lista produktów z przypisaniem do departmentów i kategorii
products = [
    Product(
        _id=1,
        imagePath="https://media.6media.me/media/catalog/product/8/6/8683049501510-1.jpg",
        title="Stylish T-shirt",
        price=49.99,
        department="Men",
        category="Shirts"
    ),
    Product(
        _id=2,
        imagePath="https://modone.com/eng_pl_Mens-elegant-shirt-with-long-sleeves-K302-black-2550_2.jpg",
        title="Elegant Shirt",
        price=69.99,
        department="Men",
        category="Shirts"
    ),
    Product(
        _id=3,
        imagePath="https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-130969.jpg",
        title="Trendy Shoes",
        price=89.99,
        department="Men",
        category="Shoes"
    ),
    Product(
        _id=4,
        imagePath="https://static1.merg.pl/data/gfx/pictures/large/3/9/209593_2.jpg",
        title="Casual Jeans",
        price=59.99,
        department="Women",
        category="Tops"
    ),
    Product(
        _id=5,
        imagePath="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Sites-allsaints-emea-master-catalog/default/dwcc103c1f/images/large/W089LB/5108/W089LB-5108-2.jpg?sw=480&sh=600&sm=fit&q=70",
        title="Leather Jacket",
        price=159.99,
        department="Women",
        category="Tops"
    ),
    Product(
        _id=6,
        imagePath="https://www.ego-sport.pl/hpeciai/49871f4e902283d16769385e8d285c02/eng_pl_Bugatti-mens-sports-sneakers-321-AFF02-5400-3000-16363_1.webp",
        title="Sport Sneakers",
        price=79.99,
        department="Men",
        category="Shoes"
    ),
    Product(
        _id=7,
        imagePath="https://kayjewelryboutique.com/cdn/shop/products/image_e322490e-74e5-4d40-a97e-8f23cca31b4d.jpg?v=1682184342",
        title="SunGlasses",
        price=99.99,
        department="Accessories",
        category="SunGlasses"
    ),
    Product(
        _id=8,
        imagePath="https://images.asos-media.com/products/asos-design-soft-baseball-cap-in-black-cotton/201649456-4?$n_640w$&wid=513&fit=constrain",
        title="Classic Hat",
        price=29.99,
        department="Accessories",
        category="Hats"
    ),
    Product(
        _id=9,
        imagePath="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663688251-1663687508-screen-shot-2022-09-20-at-9-39-51-am-1663688245.png?crop=1xw:1xh;center,top&resize=980:*",
        title="Comfortable Hoodie",
        price=39.99,
        department="Women",
        category="Tops"
    ),
    
]

# Lista użytkowników (tymczasowa baza danych)
users = [
    User(id=1, name="Alice", email="alice@example.com", password="alice123"),
    User(id=2, name="Bob", email="bob@example.com", password="bob123"),
]

next_user_id = 3  # Aby nadawać unikalne ID nowym użytkownikom

# Przykładowa lista departamentów
departments = [
    Department(id=1, departmentName="Men", categories="Shirts,Shoes,Accessories"),
    Department(id=2, departmentName="Women", categories="Dresses,Tops,Accessories"),
    Department(id=3, departmentName="Accessories", categories="Bags,Watches,Hats")
]

# Endpoint do rejestracji
@app.post("/register")
def register(user: UserRegister):
    global next_user_id

    # Sprawdzamy, czy użytkownik o takim adresie e-mail już istnieje
    for u in users:
        if u.email == user.email:
            raise HTTPException(status_code=400, detail="Email already registered")
    
    new_user = User(id=next_user_id, name=user.name, email=user.email, password=user.password)
    users.append(new_user)
    next_user_id += 1
    return {"message": "User registered successfully", "user": new_user}

# Endpoint do logowania
@app.post("/login")
def login(user: UserLogin):
    for u in users:
        if u.email == user.email and u.password == user.password:
            return {"message": "Login successful", "user": u}
    
    raise HTTPException(status_code=400, detail="Invalid credentials")

# Endpoint do pobrania listy użytkowników (do testowania)
@app.get("/users", response_model=List[User])
def get_users():
    return users

# Endpoint do produktów
@app.get("/products", response_model=List[Product])
def get_products():
    return products

# Endpoint do pobrania listy działów (departments)
@app.get("/departments", response_model=List[Department])
def get_departments():
    return departments
