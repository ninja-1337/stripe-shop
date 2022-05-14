import React, { useState, useEffect } from "react";

import StripeTestCards from "../components/StripeTestCards";

import { useShoppingCart, CartProvider } from "use-shopping-cart";
import { fetchPostJSON } from "../utils/api-helpers";
import Cart from "./Cart";
import Products from "./Products";
import { Elements, useElements } from "@stripe/react-stripe-js";
import { formatAmountForDisplay } from "../utils/stripe-helpers";
import { validateCartItems } from "use-shopping-cart/src/serverUtil";
import MyApp from "../pages/_app";
import getStripe from "../utils/get-stripejs";
import cors from "../pages/api/webhooks/index";
import PrintObject from "./PrintObject";

const CartSummary = () => {
  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);

  const {
    formattedTotalPrice,
    cartCount,
    clearCart,
    cartDetails,
    redirectToCheckout,
  } = useShoppingCart();

  const response = fetchPostJSON("/api/checkout_sessions/cart", cartDetails);
  const resObject = fetchPostJSON("/api/checkout_sessions/cart", cartDetails);
  console.log(response);
  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetchPostJSON(
      "/api/checkout_sessions/cart",
      cartDetails
    );

    if (response.statusCode === 500) {
      return;
    }

    redirectToCheckout({ sessionId: response.id });
  };
  // iterate through cartDetails and diplsay the sku_id and the quantity
  const styles = {
    height: "90vh",
    marginTop: "6vh",
  };
  return (
    <div style={styles}>
      <form onSubmit={handleCheckout}>
        <h2>Cart summary</h2>
        {/* This is where we'll render our cart */}
        <p suppressHydrationWarning>
          <strong>Number of Items:</strong> {cartCount}
        </p>
        <p suppressHydrationWarning>
          <strong>Total:</strong> {formattedTotalPrice}
        </p>
        <p suppressHydrationWarning>
          <strong>Total:</strong> {}
        </p>
        {/* Redirects the user to Stripe */}
        <StripeTestCards />
        <button
          className="cart-style-background"
          type="submit"
          disabled={cartEmpty || loading}
        >
          Checkout
        </button>
        <button
          className="cart-style-background"
          type="button"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </form>
    </div>
  );
};

export default CartSummary;
