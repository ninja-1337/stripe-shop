import React from "react";
import Modal from '../components/Modal'
import products from "../data/products.json";
import {formatCurrencyString, useShoppingCart} from "use-shopping-cart";


const Products = () => {
  const { addItem, removeItem } = useShoppingCart();
  const styles = {
    display: "flex",

  };

  return (

    <section className="products">

      {products.map((product) => (
        <div

          key={product.sku}
          className="product"
        >
          <img src={product.image} alt={product.name} onMouseOver={e => (e.currentTarget.src = product.secondary_image)} onMouseOut={e => (e.currentTarget.src = product.image)} />
          <div style={styles}>{product.name}</div>
          <p className="price">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>


          <Modal dirs={product}/>
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
