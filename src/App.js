import React, { useState, useEffect } from "react";
import Search from "./SearchBar";
import Product from "./Product";
import Cart from "./Cart";
import data from "./Products.json";
import "./App.css";
import sun from "./dlf.pt-sunset-clipart-png-664466.png";

function App() {
  // State variables
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch product data from a JSON file
  useEffect(() => {
    setProducts(data);
  }, []);

  // Add an item to the cart or increase its quantity
  const handleAddToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
    }
  };

  // Remove an item from the cart or decrease its quantity
  const handleRemoveFromCart = (productId) => {
    const index = cart.findIndex((item) => item.id === productId);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].quantity -= 1;
      if (newCart[index].quantity === 0) {
        newCart.splice(index, 1);
      }
      setCart(newCart);
    }
  };

  // Clear the cart completely
  const handleClearCart = () => {
    setCart([]);
  };

  // Update search term state when user types into the search bar
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  // Filter the products based on the search term
  const searchResults = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Compute the total price of the items in the cart
  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      item.quantity * products.find((product) => product.id === item.id).price,
    0
  );

  // Render the app
  return (
    <div className="app">
      <div className="shop-container">
        <h1 className="shop-name">Tropicana Hawaii fashion Shop</h1>
        <img style={{ width: "180px" }} src={sun} alt="" />
      </div>

      <header className="header">
        <h1 className="brand">Dolby Banana</h1>
      </header>

      {/* SearchBar component */}
      <Search onSearch={handleSearch} />
      <div style={{ paddingBottom: "25px" }}>
        {/* Cart component */}
        <Cart
          productsData={products}
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
          totalPrice={totalPrice}
        />
      </div>

      <div className="main">
        {/* Product component */}
        <div className="product-list">
          {searchTerm
            ? searchResults.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))
            : products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
