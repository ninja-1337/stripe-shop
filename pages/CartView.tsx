import { NextPage } from "next";
import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";
import Layout from "../components/Layout";

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
