
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { allPlants } from "../allPlants"
import { ShopContext } from "../context/shop-context";
import ItemsInCart from "./ItemsInCart"
import "./cart.css";


function Cart() {
    const { cartItems, setCartItems, totalCartAmount, checkoutComplete, setCheckoutComplete } = useContext(ShopContext);
    const totalAmount = totalCartAmount()
    const navigate = useNavigate();

    function handleCheckout () {
        setCartItems();
        // Dummy checkout process
        setCheckoutComplete(true);
    };

    // Resets checkoutComplete to false when leaving the cart page
        useEffect(() => {
            function cleanup () {
                setCheckoutComplete(false);
            };
        return cleanup;
    }, []); // [] means the effect runs only once after the initial render.

    return  (
        <div className="cart">
            <div>
                <h1>Your Shopping Basket</h1>
            </div>
            <div className="cart-item">
                {allPlants.map((plant, index) => {
                    if (cartItems && cartItems[plant.id] !== 0) {
                        return <ItemsInCart data={plant} key={index}/>;
                    }
                    return null;
                })}
            </div>
        
            {checkoutComplete ? (
                <div>
                    <h2>Checkout is complete. Thank you!</h2>
                </div>
            ) : (
                <div className="checkout">
                    {totalAmount > 0 ? (
                        <>
                            <p>
                                <b>Total: <span style={{ color: "#4b8f12" }}>£{totalAmount}</span></b>
                            </p>
                            <button onClick={handleCheckout}>Proceed to Checkout</button>
                        </>
                    ) : (
                        <h2>Your Basket is Empty!</h2>
                    )}
                </div>
            )}
        </div>
    );
}
export default Cart;

