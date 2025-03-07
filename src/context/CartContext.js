import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log("Adding to Cart:", item);
    setCart((prevCart) => {
      if (!prevCart.find((cartItem) => cartItem.id === item.id)) {
        return [...prevCart, item];
      }
      return prevCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    console.log("Clearing Cart");
    setCart([]); // Clears the cart after checkout
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
