import { NextPage } from "next";
import Layout from "../components/Layout";

import CheckoutForm from "../components/CheckoutForm";
const styles = {
  marginTop: "10vh",
};
const DonatePage: NextPage = () => {
  return (
    <div style={styles}>
      <Layout title="Donate with Checkout | Next.js + TypeScript Example">
        <div className="page-container">
          <h1>Custom Payment Checkout💰</h1>

          <CheckoutForm />
        </div>
      </Layout>
    </div>
  );
};

export default DonatePage;
