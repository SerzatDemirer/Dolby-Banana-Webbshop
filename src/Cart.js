import React from "react";

function Cart(props) {
  const { productsData, cart, onRemoveFromCart, onClearCart, totalPrice } =
    props;

  const cartItems = Object.entries(cart);

  const handleRemoveFromCart = (productId) => {
    onRemoveFromCart(productId);
  };

  const handleClearCart = () => {
    onClearCart();
  };

  return (
    <div className="cart">
      <h2>Kundvagn</h2>
      <ul>
        {cartItems.map(([productId, quantity]) => (
          <li key={productId}>
            {productsData.find((p) => p.id === +productId).name} ({quantity}){" "}
            <button onClick={() => handleRemoveFromCart(productId)}>
              Ta bort
            </button>
          </li>
        ))}
      </ul>
      <p>Totalt: {totalPrice} kr</p>
      <button onClick={handleClearCart}>Töm kundvagnen</button>
      <button>Gå till kassan</button>
    </div>
  );
}

export default Cart;
