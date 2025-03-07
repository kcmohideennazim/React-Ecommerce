import React, { createContext, useContext, useState } from "react";
import { useCart } from "./CartContext"; 

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useCart();  // Use cart context here

  const addToWishlist = (item) => {
    console.log("Adding to Wishlist:", item);
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((wishItem) => wishItem.id === item.id)) {
        return [...prevWishlist, item];
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  // ✅ Fix: Add `moveToCart` function
  const moveToCart = (item) => {
    addToCart(item);  // Add item to cart
    removeFromWishlist(item.id); // Remove from wishlist
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, moveToCart }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
