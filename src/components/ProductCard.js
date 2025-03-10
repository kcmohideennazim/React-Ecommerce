import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./ProductCard.css";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

const productImages = {
  1: product1,
  2: product2,
  3: product3,
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  console.log("Cart Function:", addToCart);
  console.log("Wishlist Function:", addToWishlist);

  return (
    <div className="product-card">
      <img src={productImages[product.id] || product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price.toLocaleString()}</p>
      <div className="product-actions">
        <button 
          className="cart-btn" 
          onClick={() => {
            console.log("Clicked Add to Cart:", product);
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
        <button 
          className="wishlist-btn" 
          onClick={() => {
            console.log("Clicked Add to Wishlist:", product);
            addToWishlist(product);
          }}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
