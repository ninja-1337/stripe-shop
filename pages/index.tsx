import { NextPage } from "next";
import Layout from "../components/Layout";

import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";
import Products from "../components/Products";
import { useState } from "react";
import React from "react";

//style const
const styles = {
  height: "90vh",
  marginTop: "6vh",
};
const center = {
  alignItems: "center",
  justifyContent: "center",

};

const DonatePage: NextPage = () => {
  return (

      <Layout title="Shopping Cart | Next.js + TypeScript Example">
        <div style={center}>
          <h1 >Products</h1>
        </div>
        <Cart>
          <Products />

        </Cart>

      </Layout>

  );
};

export default DonatePage;