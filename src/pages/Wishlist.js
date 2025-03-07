import React from "react";
import { useWishlist } from "../context/WishlistContext";
import "../pages/Wishlist.css"; 

function Wishlist() {
  const { wishlist, removeFromWishlist, moveToCart } = useWishlist();

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? <p className="empty-wishlist">Your wishlist is empty.</p> : null}

      <div className="wishlist-items">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} className="wishlist-image" />
            <div className="wishlist-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toLocaleString()}</p>
              <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>
                Remove
              </button>
              <button className="move-btn" onClick={() => moveToCart(item)}>
                Move to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
