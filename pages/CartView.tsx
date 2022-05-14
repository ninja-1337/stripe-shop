import { NextPage } from "next";
import Link from "next/link";
import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";
import Layout from "../components/Layout";
import Products from "../components/Products";

const IndexPage: NextPage = () => {
  return (
    <Layout title="EasySec Shop">
      <Cart>
        <CartSummary></CartSummary>
      </Cart>
    </Layout>
  );
};

export default IndexPage;
