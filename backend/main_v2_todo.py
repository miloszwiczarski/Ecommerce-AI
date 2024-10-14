from fastapi import FastAPI
from routes import product_routes, user_routes, department_routes

app = FastAPI()

app.include_router(product_routes.router)
app.include_router(user_routes.router)
app.include_router(department_routes.router)


# Middleware CORS
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
