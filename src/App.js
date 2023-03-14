import React, { useState, useEffect } from "react";
import Search from "./SearchBar";
import ProductList from "./ProductList";
import Cart from "./Cart";
import data from "./Products.json";
import "./App.css";

function App() {
  // State variables
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch product data from a JSON file
  useEffect(() => {
    setProducts(data);
  }, []);

  // Add an item to the cart or increase its quantity
  const handleAddToCart = (product) => {
    setCart((currentCart) => {
      const newCart = { ...currentCart };
      newCart[product.id] = newCart[product.id] ? newCart[product.id] + 1 : 1;
      return newCart;
    });
  };

  // Remove an item from the cart or decrease its quantity
  const handleRemoveFromCart = (productId) => {
    setCart((currentCart) => {
      const newCart = { ...currentCart };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  // Clear the cart completely
  const handleClearCart = () => {
    setCart({});
  };

  // Update search term state when user types into the search bar
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  // Filter the products based on the search term
  const searchResults = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Compute the total price of the items in the cart
  const totalPrice = Object.entries(cart).reduce(
    (total, [productId, quantity]) =>
      total +
      products.find((product) => product.id === +productId).price * quantity,
    0
  );

  // Render the app
  return (
    <div className="app">
      <div className="shop-container">
        <h1 className="shop-name">Tropicana Hawaii fashion Shop</h1>
      </div>

      <header className="header">
        <h1 className="brand">Dolby Banana</h1>
      </header>

      {/* SearchBar component */}
      <Search onSearch={handleSearch} />

      <div className="main">
        {/* ProductList component */}
        <ProductList
          products={searchTerm ? searchResults : products}
          onAddToCart={handleAddToCart}
        />

        {/* Cart component */}
        <Cart
          productsData={products}
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
}

export default App;
