import React, {useContext} from "react";
import { ShopContext } from "../context/shop-context";

function ItemsInCart(props) {
    const { id, plantImage, price, plantName } = props.data;
    const { cartItems, addToCart, removeFromCart, updateItemInCart } = useContext(ShopContext); // Using useContext hook to destructure cartItems and etc

     // Function to handle input change for cart item quantity
    const handleInputChange = (event) => {
        const newAmount = Number(event.target.value); // Converting input value to a number
        updateItemInCart(newAmount, id); // Call updateItemInCart function with the new amount and item id.
    };



    return (
        <div className="cartItem">
            <img src={plantImage} />
            <div className="description">
                <p> 
                    <b>{plantName}</b>
                </p>
                <p> 
                    £{price}
                </p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    {/* event.target.value would be a string so it needs to be converted to a number */}
                    <input value={cartItems[id]?? ""} onChange={handleInputChange} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}

export default ItemsInCart;