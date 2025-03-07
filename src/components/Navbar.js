import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./Navbar.css"; // Separate CSS for cleaner styling

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🚗 Car eCommerce</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">🛒 Cart <span className="badge">{cart.length}</span></Link>
        <Link to="/wishlist">❤️ Wishlist <span className="badge">{wishlist.length}</span></Link>
        <Link to="/checkout">✅ Checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
