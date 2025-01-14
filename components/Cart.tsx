// @ts-nocheck
import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";
import getStripe from "../utils/get-stripejs";
import * as config from "../config";


const Cart = ({ children }: { children: ReactNode }) => (
    <div className="cart-center">
  <CartProvider
    mode="checkout-session"
    stripe={getStripe()}
    currency={config.CURRENCY}
  >
    <>{children}</>
  </CartProvider>
    </div>
);

export default Cart;
