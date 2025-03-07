import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Import cart context
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    location: "", // Added location
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart(); // Clears the cart after order is placed

    setTimeout(() => {
      navigate("/"); // Redirect to home page after a delay
    }, 3000);
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {orderPlaced ? (
        <h2>Order Placed Successfully! 🎉</h2>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
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
