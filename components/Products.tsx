import React from "react";

import products from "../data/products.json";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const Products = () => {
  const { addItem, removeItem } = useShoppingCart();

  const styles = {
    marginTop: "1vh",
  };

  return (
    <section className="products">
      {products.map((product) => (
        <div
          onClick={() => addItem(product)}
          key={product.sku}
          className="product"
        >
          <img src={product.image} alt={product.name} />
          <div style={styles}>{product.name}</div>
          <p className="price">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
          {/* <button
            className="cart-style-background"
            onClick={() => addItem(product)}
          >
            Add to cart
          </button> */}
          {/* <button
            className="cart-style-background"
            onClick={() => removeItem(product.sku)}
          >
            Browse
          </button> */}
        </div>
      ))}
    </section>
  );
};

export default Products;
