import React, { useState } from "react";
import ProductModal from "./ProductModal";

// ...
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
      <p>{product.description}</p>
      <p>Pris: {product.price} kr</p>
      <button onClick={handleAddToCart}>Lägg till i kundvagnen</button>
      <button onClick={showProductDetailModal}>Mer info</button>

      <ProductModal
        onClose={showProductDetailModal}
        show={showModal}
        product={product}
      />
    </div>
  );
}

export default Product;
