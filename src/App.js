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
    const itemInCart = cart.find((item) => item.id === product.id);
    itemInCart
      ? setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        )
      : setCart([...cart, { ...product, quantity: 1 }]);
  };

  // Remove an item from the cart or decrease its quantity
  const handleRemoveFromCart = (productId) => {
    const itemInCart = cart.find((item) => item.id === productId);
    if (itemInCart.quantity === 1) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
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
  const filteredData = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
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
      <Search
        onSearch={handleSearch}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={{ paddingBottom: "25px" }}>
        {/* Cart component */}
        <Cart
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
          totalPrice={totalPrice}
        />
      </div>

      <div className="main">
        {/* Product component */}
        <div className="product-list">
          {/* Map over products or search results based on the search term */}
          {filteredData.map((product) => (
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
