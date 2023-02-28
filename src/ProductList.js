function ProductList(props) {
  return (
    <div className="product-list">
      {props.products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={props.onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
