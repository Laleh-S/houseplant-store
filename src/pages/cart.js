// import { useContext } from "react";
import React, {useContext} from "react";
import { allPlants } from "../allPlants"
import { ShopContext } from "../context/shop-context";
import ItemsInCart from "./ItemsInCart"
import "./cart.css";
import { useNavigate } from "react-router-dom";
import plantDetail from "../pages/plantDetail";

function Cart() {
    const { cartItems, totalCartAmount } = useContext(ShopContext);
    const totalAmount = totalCartAmount()

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1></h1>
            </div>
            <div className="cart">
                {/* for each plant, if the plant.id has a value that not equal to 0, it means it's greater than 0  */ }
                {/* means the plant is already in the cart  */ }
                {allPlants.map((plant) => {
                    if (cartItems[plant.id] !== 0) {
                        return <ItemsInCart data={plant} /> // if this is the case, return CartItem component.
                    }
                })}
            </div>
            
        {totalAmount > 0 ?
            <div className="checkout">
                <p>Total: £{totalAmount} </p>
                <button onClick={() => (navigate("/"))}>Continue Shopping</button> {/* "/" -> takes us to the main page */}
                <button>Checkout</button>
            </div>
        : <h2>Your Shopping Cart is Empty!</h2>}
        </div>
    )
}
export default Cart;