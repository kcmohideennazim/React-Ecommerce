import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; 
import "../pages/Cart.css"; 

function Cart() {
  const { cart, removeFromCart, getTotalPrice } = useCart();
  const navigate = useNavigate(); 

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout"); 
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? <p className="empty-cart">Your cart is empty.</p> : null}
      
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toLocaleString()}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <>
          <h3 className="cart-total">Total Price: ${getTotalPrice().toLocaleString()}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
