import React, { useState } from "react";
import ProductModal from "./ProductModal";

function Product(props) {
  const [showModal, setShowModal] = useState(false);
  const { product, onAddToCart } = props;

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const showProductDetailModal = () => {
    setShowModal(!showModal);
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
          onClose={showProductDetailModal}
          show={showModal}
          product={product}
        />
      )}
    </div>
  );
}

export default Product;
