import { NextPage } from "next";

import { Elements } from "@stripe/react-stripe-js";
import getStripe from "../utils/get-stripejs";

import Layout from "../components/Layout";
import ElementsForm from "../components/ElementsForm";
const styles = {
  marginTop: "7vh",
};
const DonatePage: NextPage = () => {
  return (
    <div style={styles}>
      <Layout title="Donate with Elements | Next.js + TypeScript Example">
        <div className="page-container">
          <h1>Pay with Elements</h1>

          <Elements stripe={getStripe()}>
            <ElementsForm />
          </Elements>
        </div>
      </Layout>
    </div>
  );
};

export default DonatePage;
