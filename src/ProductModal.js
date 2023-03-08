import React from "react";

function ProductModal(props) {
  const { product, onClose, show } = props;

  const handleClose = () => {
    onClose();
  };

  if (!show) {
    return null;
  }
  return (
    <div className="modal" id="modal">
      <div className="modal-content">
        <img src={product.image} alt={product.name} />
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
