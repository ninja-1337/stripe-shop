import Link from "next/link";
import CartSummaryy from "./cartNav";
import Cart from "./Cart";
import Products from "./Products";
import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import CartNav from "./cartNav";


const Header = () => (

//position element at top of document
<>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    <div className="header-content" >
      <Link href="/">API Managed E-Shop💸</Link>
        {/*<Link href="/about">About</Link>*/}
        {/*<Link href="/contact">Contact</Link>*/}


        <CartNav/>

        {/*    Nac menu*/}

    </div>


</>
);

export default Header;
