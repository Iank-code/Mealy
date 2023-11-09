from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import db, Order  # Import your SQLAlchemy models

# Define the database connection URL
DATABASE_URL = "sqlite:///mealy.db"

# Create a SQLAlchemy engine and session
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()

# Define order data (replace with actual data)
order_data = [
    {
        'user_id': 1,
        'meal_id': 1,
        'quantity': 2,
        'total_amount': 25.99,
    },
    {
        'user_id': 2,
        'meal_id': 3,
        'quantity': 1,
        'total_amount': 12.50,
    },
]

# Create and add orders to the database
for data in order_data:
    order = Order(**data)
    session.add(order)

# Commit the changes to the database
session.commit()

# Close the session
session.close()
