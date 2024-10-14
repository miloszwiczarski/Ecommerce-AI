from backend.models.product import Product
from backend.models.user import User

# Symulowana baza danych produktów
# Nowa lista produktów
products = [
    # Produkty dla mężczyzn
    Product(
        _id=1,
        imagePath="https://media.6media.me/media/catalog/product/8/6/8683049501510-1.jpg",
        title="Men's Stylish T-shirt",
        price=49.99,
        department="Men",
        category="Shirts"
    ),
    Product(
        _id=2,
        imagePath="link_do_zdjęcia",
        title="Men's Elegant Shirt",
        price=69.99,
        department="Men",
        category="Shirts"
    ),
    Product(
        _id=3,
        imagePath="link_do_zdjęcia",
        title="Men's Trendy Shoes",
        price=89.99,
        department="Men",
        category="Shoes"
    ),
    Product(
        _id=4,
        imagePath="link_do_zdjęcia",
        title="Men's Casual Jeans",
        price=59.99,
        department="Men",
        category="Pants"
    ),
    Product(
        _id=5,
        imagePath="link_do_zdjęcia",
        title="Men's Leather Jacket",
        price=159.99,
        department="Men",
        category="Jackets"
    ),
    Product(
        _id=6,
        imagePath="link_do_zdjęcia",
        title="Men's Sport Sneakers",
        price=79.99,
        department="Men",
        category="Shoes"
    ),
    Product(
        _id=7,
        imagePath="link_do_zdjęcia",
        title="Men's Casual Sweater",
        price=49.99,
        department="Men",
        category="Sweaters"
    ),
    Product(
        _id=8,
        imagePath="link_do_zdjęcia",
        title="Men's Classic Hat",
        price=29.99,
        department="Men",
        category="Accessories"
    ),

    # Produkty dla kobiet
    Product(
        _id=9,
        imagePath="link_do_zdjęcia",
        title="Women's Stylish Dress",
        price=89.99,
        department="Women",
        category="Dresses"
    ),
    Product(
        _id=10,
        imagePath="link_do_zdjęcia",
        title="Women's Summer Top",
        price=39.99,
        department="Women",
        category="Tops"
    ),
    Product(
        _id=11,
        imagePath="link_do_zdjęcia",
        title="Women's High-Heel Shoes",
        price=99.99,
        department="Women",
        category="Shoes"
    ),
    Product(
        _id=12,
        imagePath="link_do_zdjęcia",
        title="Women's Casual Skirt",
        price=59.99,
        department="Women",
        category="Skirts"
    ),
    Product(
        _id=13,
        imagePath="link_do_zdjęcia",
        title="Women's Leather Jacket",
        price=199.99,
        department="Women",
        category="Jackets"
    ),
    Product(
        _id=14,
        imagePath="link_do_zdjęcia",
        title="Women's Sport Sneakers",
        price=79.99,
        department="Women",
        category="Shoes"
    ),
    Product(
        _id=15,
        imagePath="link_do_zdjęcia",
        title="Women's Handbag",
        price=149.99,
        department="Women",
        category="Accessories"
    ),
    Product(
        _id=16,
        imagePath="link_do_zdjęcia",
        title="Women's Sunglasses",
        price=99.99,
        department="Women",
        category="Accessories"
    ),

    # Akcesoria
    Product(
        _id=17,
        imagePath="link_do_zdjęcia",
        title="Leather Wallet",
        price=49.99,
        department="Accessories",
        category="Bags"
    ),
    Product(
        _id=18,
        imagePath="link_do_zdjęcia",
        title="Classic Watch",
        price=199.99,
        department="Accessories",
        category="Watches"
    ),
    Product(
        _id=19,
        imagePath="link_do_zdjęcia",
        title="Gold Bracelet",
        price=129.99,
        department="Accessories",
        category="Jewelry"
    ),
    Product(
        _id=20,
        imagePath="link_do_zdjęcia",
        title="Sunglasses",
        price=99.99,
        department="Accessories",
        category="Sunglasses"
    ),
    Product(
        _id=21,
        imagePath="link_do_zdjęcia",
        title="Leather Belt",
        price=39.99,
        department="Accessories",
        category="Bags"
    ),
    Product(
        _id=22,
        imagePath="link_do_zdjęcia",
        title="Men's Cufflinks",
        price=49.99,
        department="Accessories",
        category="Jewelry"
    ),
    Product(
        _id=23,
        imagePath="link_do_zdjęcia",
        title="Travel Bag",
        price=149.99,
        department="Accessories",
        category="Bags"
    ),
    Product(
        _id=24,
        imagePath="link_do_zdjęcia",
        title="Silk Scarf",
        price=69.99,
        department="Accessories",
        category="Scarves"
    )
]


# Symulowana baza danych użytkowników
users = [
    User(1, "Alice", "alice@example.com", "alice123"),
    User(2, "Bob", "bob@example.com", "bob123"),
]
