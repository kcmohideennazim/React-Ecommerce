import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

const cars = [
  { id: 1, name: "Jesko Absolut", price: 3000000, image: product1 },
  { id: 2, name: "Bugatti Bolide", price: 2100000, image: product2 },
  { id: 3, name: "Hennessey Venom", price: 4700000, image: product3 },
];

function Home() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="home-container">
      <h1>Car eCommerce</h1>
      <div className="car-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <h2>{car.name}</h2>
            <p>Price: ${car.price.toLocaleString()}</p>
            <button onClick={() => addToCart(car)}>Add to Cart</button>
            <button onClick={() => addToWishlist(car)}>Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
