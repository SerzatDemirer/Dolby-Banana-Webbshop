import React, { useState, useEffect } from "react";
import Search from "./SearchBar";
import ProductList from "./ProductList";
import Cart from "./Cart";
import data from "./Products.json";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProducts(data);
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[product.id] = (newCart[product.id] || 0) + 1;
      return newCart;
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productId] > 1) {
        newCart[productId] = newCart[productId] - 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [products, searchTerm]);

  const cartItems = Object.entries(cart);
  const totalPrice = cartItems.reduce(
    (total, [productId, quantity]) =>
      total +
      products.find((p) => p.id === parseInt(productId)).price * quantity,
    0
  );

  return (
    <div className="app">
      <header className="header">
        <h1 className="shop-name">Dolby Banana</h1>

        <div className="tropic-beach">
          <img src="" alt="" />
        </div>
      </header>
      <Search onSearch={handleSearch} onClear={handleClearSearch} />
      <div className="main">
        <ProductList
          products={searchTerm ? searchResults : products}
          onAddToCart={handleAddToCart}
        />
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
