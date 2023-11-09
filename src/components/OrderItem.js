// // src/components/OrderItem/OrderItem.js
// import React from 'react';
// import PropTypes from 'prop-types';
// import './OrderItem.css'; // For styling


// const OrderItem = ({ order }) => {
//     return (
//         <div className="order-item">
//             <h2>Order #{order.id}</h2>
//             <p><strong>Meal:</strong> {order.meal.name}</p> {/* Adjust according to how meal details are received */}
//             <p><strong>Quantity:</strong> {order.quantity}</p>
//             <p><strong>Total Amount:</strong> ${order.total_amount.toFixed(2)}</p>
//             <p><strong>Order Date:</strong> {new Date(order.created_at).toLocaleDateString()}</p>
//             {/* If there are additional details to include, such as order status, they can be added here */}
//         </div>
//     );
// };

// OrderItem.propTypes = {
//     order: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         meal: PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             // Include other meal properties as required
//         }).isRequired,
//         quantity: PropTypes.number.isRequired,
//         total_amount: PropTypes.number.isRequired,
//         created_at: PropTypes.string.isRequired,
//         // Define any other required properties of the 'order' object here
//     }).isRequired,
// };

// export default OrderItem;
import React from 'react';
import './Orders.css';

const Orders = () => {
  return (
    <div>
      <header>
        <h1>Your Orders</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            {/* Other nav items */}
          </ul>
        </nav>
      </header>

      <main>
        {/* ... Other sections ... */}

        <section className="order-list">
          <h3>Your Recent Orders</h3>
          <ul>
            <li>Order ID: 1, Meal: Pizza, Quantity: 2, Total: $20.00, Created At: 2023-11-01</li>
            <li>Order ID: 2, Meal: Sushi, Quantity: 4, Total: $35.00, Created At: 2023-11-02</li>
            <li>Order ID: 3, Meal: Burger, Quantity: 3, Total: $15.00, Created At: 2023-11-03</li>
            <li>Order ID: 4, Meal: Pasta, Quantity: 2, Total: $22.00, Created At: 2023-11-04</li>
            <li>Order ID: 5, Meal: Salad, Quantity: 1, Total: $12.00, Created At: 2023-11-05</li>
            <li>Order ID: 6, Meal: Tacos, Quantity: 5, Total: $25.00, Created At: 2023-11-06</li>
            <li>Order ID: 7, Meal: Steak, Quantity: 2, Total: $30.00, Created At: 2023-11-07</li>
            <li>Order ID: 8, Meal: Sandwich, Quantity: 3, Total: $18.00, Created At: 2023-11-08</li>
            <li>Order ID: 9, Meal: Ramen, Quantity: 2, Total: $16.00, Created At: 2023-11-09</li>
            {/* You can add more orders here if needed */}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Mealy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Orders;


