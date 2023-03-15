import React from "react";

//Cart function with essential props.
function Cart({ cart, onRemoveFromCart, onClearCart, totalPrice }) {
  // Define function to remove an item from cart and callback (onRemoveFromCart) to main remove function
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
        {cart.map((cartItem) => (
          <li key={cartItem.id}>
            <span>{cartItem.name} </span>
            <span>({cartItem.quantity})</span>
            <button onClick={() => handleRemoveFromCart(cartItem.id)}>
              Ta bort
            </button>
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
