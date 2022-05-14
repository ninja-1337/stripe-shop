import { NextPage } from "next";
import Layout from "../components/Layout";

import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";
import Products from "../components/Products";
//style const
const styles = {
  height: "90vh",
  marginTop: "6vh",
};
const center = {
  textAlign: "center",
  alignItems: "center",
};
const DonatePage: NextPage = () => {
  return (
    <div style={styles}>
      <Layout title="Shopping Cart | Next.js + TypeScript Example">
        <div className="page-container">
          <h1 style={center}>Products</h1>
          <Cart>
            <Products />
            {/* <CartSummary /> */}
          </Cart>
        </div>
      </Layout>
    </div>
  );
};

export default DonatePage;
