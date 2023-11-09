import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div>
      <header>
        <h1>User Profile</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/orders">Orders</a></li>
            {/* Add links to other user-related pages */}
          </ul>
        </nav>
      </header>

      <main>
        <section className="user-information">
          <h2>User Information</h2>
          <div className="user-details">
            <div className="avatar">
              <img src="user-avatar.jpg" alt="User Avatar" />
            </div>
            <div className="user-info">
              <h3>Gift Kimani</h3>
              <p>Email: gift.kimani@example.com</p>
              <p>Phone: +254-756-7890</p>
            </div>
          </div>
        </section>

        <section className="order-history">
          <h2>Order History</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Meal</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Pizza</td>
                <td>2</td>
                <td>$20.00</td>
                <td>2023-11-01</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sushi</td>
                <td>4</td>
                <td>$35.00</td>
                <td>2023-11-02</td>
              </tr>
              {/* Add more rows for different orders */}
            </tbody>
          </table>
        </section>

        <section className="account-settings">
          <h2>Account Settings</h2>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value="giftkimani" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value="gift.kimani@example.com" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="********" />

            <button type="submit">Save Changes</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Mealy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserProfile;
