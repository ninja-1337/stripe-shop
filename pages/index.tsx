import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage: NextPage = () => {
  return (
    <Layout title="EasySec Shop">
      <ul className="card-list">
        <li>
          <Link href="/donate-with-checkout">
            <a className="card checkout-style-background">
              <h2 className="bottom">Custom Payment with Checkout</h2>
              <img src="/checkout-one-time-payments.svg" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/donate-with-elements">
            <a className="card elements-style-background">
              <h2 className="bottom">Pay with Elements</h2>
              <img src="/elements-card-payment.svg" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/use-shopping-cart">
            <a className="card cart-style-background">
              <h2 className="bottom">Browse Products</h2>
              <img src="/use-shopping-cart.png" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/CartView">
            <a className="card cart-style-background">
              <h2 className="bottom">View Shoping Cart</h2>
              <img src="/use-shopping-cart.png" />
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
