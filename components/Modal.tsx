// @ts-nocheck
import React from 'react';
import {formatCurrencyString, useShoppingCart} from "use-shopping-cart";
import Popup from "reactjs-popup";

const Modal = ({dirs: dirs}) => {
    let { addItem} = useShoppingCart();
    const listItems = dirs.size.map((size: string) =>
        <li >{size}, </li>
    );
    const listColors = dirs.color.map((size: string) =>
        <li >{size}, </li>
    );

    return (

        <Popup
            trigger={<button className="button-27" > Explore Item </button>}
            modal
            position="bottom center"

        >
        <div>
            <div className="modal">



                <div className="product-modal">
                    <img src={dirs.image} alt={dirs.name} />
                    <div className="div-left">
                        <p>Name: {dirs.name}</p>
                        <p>Description: {dirs.description}</p>
                        <p>Available Sizes: {listItems}</p>
                        <p>Available Colors: {listColors}</p>
                        <p>Product Price: {formatCurrencyString({
                            value: dirs.price,
                            currency: dirs.currency,
                        })}</p>
                    </div>
                    <div className="div-right" >
                        <button
                            className="button-26"
                            onClick={() => addItem(dirs)}
                        >
                            Add to cart
                        </button>

                    </div>




                </div>

            </div>
        </div>
        </Popup>
    );
}
export default Modal;


