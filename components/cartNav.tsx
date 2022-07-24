import React, { useState, useEffect } from "react";

import StripeTestCards from "../components/StripeTestCards";

import { useShoppingCart } from "use-shopping-cart";
import { fetchPostJSON } from "../utils/api-helpers";
import Link from "next/link";

const CartNav = () => {


  return <div className="header-cart"><Link href="/CartView">Cart🛒</Link></div>;
};

export default CartNav;
