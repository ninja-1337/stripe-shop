import Link from "next/link";
import CartSummaryy from "./cartNav";
import Cart from "./Cart";
import Products from "./Products";
import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

const headerStyle = {
  //use 100 Viewport Width
  width: "100vw",
  //use 100 Viewport Height
  height: "8vh",
  //position header top top of the page
  position: "fixed",
  //use absolute positioning
  top: "0",
  //use absolute positioning
  left: "0",
  //use absolute positioning
  right: "0",
  //use absolute positioning
  bottom: "0",
  //use absolute positioning
  zIndex: "1",
  //use absolute positioning
  backgroundColor: "white",
  //use absolute positioning
  display: "flex",
  //use absolute positioning
  justifyContent: "space-between",
  //use absolute positioning
  alignItems: "center",
  //use absolute positioning
  padding: "1.5rem",

  //use absolute positioning
  fontSize: "1rem",
  //use absolute positioning
  color: "white",
  //use absolute positioning
  fontWeight: "bold",
  //use absolute positioning
  textAlign: "center",
  //use absolute positioning
  textTransform: "uppercase",
  //position: "fixed",
  // top: "0",
  // left: "0",

  // backgroundColor: "white",
  // boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
  // display: "flex",
  // justifyContent: "space-between",
  // alignItems: "center",
  // padding: "0 1rem",
  // borderBottom: "1px solid #ccc",
};
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
};
const Header = () => (
  //position element at top of document
  <React.Fragment>
    <div className="header-content" style={headerStyle}>
      <Link href="/">EasySec E-Shop💸</Link>

      <div></div>
      <Cart>
        <CartSummaryy />
      </Cart>
    </div>
  </React.Fragment>
);

export default Header;
