
import React, {useContext} from "react";
import { allPlants } from "../allPlants"
import { ShopContext } from "../context/shop-context";
import ItemsInCart from "./ItemsInCart"
import "./cart.css";


function Cart() {
    const { cartItems, totalCartAmount } = useContext(ShopContext);
    const totalAmount = totalCartAmount()

    return (
        <div className="cart">
            <div>
                <h1></h1>
            </div>
            <div className="cart-item">
                {/* for each plant, if the value of plant.id is not equal to 0, then it's greater than 0, means the plant is already in the cart */}
                {allPlants.map((plant, index) => {
                    if (cartItems[plant.id] !== 0) {
                        return <ItemsInCart data={plant} key={index}/> // if this is the case, return ItemsInCart component.
                    }
                })}
            </div>
        
            {totalAmount > 0 ?
                <div className="checkout">
                    <p><b>Total: <span style={{ color: "#4b8f12" }}>£{totalAmount}</span> </b> </p>
                    <button>Proceed to Checkout</button>
                </div>
            : <h2>Your Basket is Empty!</h2>}
    </div>

    )
}
export default Cart;

