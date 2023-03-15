import React, { useState } from "react";
import ProductModal from "./ProductModal";

function Product({ product, onAddToCart }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const showProductDetailModal = () => {
    setShowModal(true);
  };

  const closeProductDetailModal = () => {
    setShowModal(false);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Brand: {product.brand}</p>
      <p>Price: {product.price} kr</p>
      <button onClick={handleAddToCart}>Lägg till kundvagn</button>
      <button onClick={showProductDetailModal}>Mer info</button>

      {showModal && (
        <ProductModal
          closeProductDetailModal={closeProductDetailModal}
          product={product}
        />
      )}
    </div>
  );
}

export default Product;
