import React from "react";

function ProductModal({ product, closeProductDetailModal }) {
  const handleClose = () => {
    closeProductDetailModal();
  };

  return (
    <div className="modal" id="modal">
      <div className="modal-content">
        <img
          style={{ width: "150px" }}
          src={product.image}
          alt={product.name}
        />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Pris: {product.price} kr</p>
        <p>Artikelnummer: {product.articleNumber}</p>
        <p>Färg: {product.color}</p>
        <p>Varumärke: {product.brand}</p>
        <button onClick={handleClose}>Stäng</button>
      </div>
    </div>
  );
}

export default ProductModal;
