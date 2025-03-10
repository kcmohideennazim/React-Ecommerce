import React, { useState } from "react";
import { useCart } from "../context/CartContext"; 
import { useAuth } from "../context/AuthContext"; 
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { clearCart } = useCart();
  const { user, login } = useAuth(); 
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    location: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [guest, setGuest] = useState(false);
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart(); 

    setTimeout(() => {
      navigate("/"); 
    }, 3000);
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      {!user && !guest ? (
        <div className="auth-section">
          <h3>Login or Checkout as Guest</h3>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => login(username)}>Login</button>
          <button onClick={() => setGuest(true)}>Checkout as Guest</button>
        </div>
      ) : orderPlaced ? (
        <h2>Order Placed Successfully! 🎉</h2>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Proceeding as {user ? user.name : "Guest"}</h3>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="text" name="location" placeholder="Delivery Location" onChange={handleChange} required />
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
