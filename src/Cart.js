import React from "react";

function Cart(props) {
  // Destructure props for easier use
  const { productsData, cart, onRemoveFromCart, onClearCart, totalPrice } =
    props;

  // Define function to remove an item from cart and call parent function
  const handleRemoveFromCart = (productId) => {
    onRemoveFromCart(productId);
  };

  // Define function to clear cart and call parent function
  const handleClearCart = () => {
    onClearCart();
  };

  // Render the component
  return (
    <div className="cart">
      <h2>Kund korg</h2>
      {/* Map over the cart array and render each item in a list */}
      <ul>
        {cart.map(({ id, quantity }) => (
          <li key={id}>
            {/* Find the corresponding product name from productsData array */}
            {productsData.find((product) => product.id === id).name} ({quantity}
            ){/* Call the function to remove the item from cart */}
            <button onClick={() => handleRemoveFromCart(id)}>Ta bort</button>
          </li>
        ))}
      </ul>
      {/* Render the total price of items in cart */}
      <p>Total: {totalPrice} kr</p>
      {/* Call the function to clear the cart */}
      <button onClick={handleClearCart}>Töm kundkorg</button>
      <button>Köp nu</button>
    </div>
  );
}

// Export the component as default
export default Cart;
