import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";

function ItemsInCart(props) {
    const { id, plantImage, price, plantName } = props.data;
    const { cartItems, addToCart, removeFromCart, updateItemInCart } = useContext(ShopContext);
    
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
                <button onClick={() => removeFromCart(id)} > - </button>
            {/* event.target.value would be an string so it needs to be converted to a number */}
                <input value={cartItems[id]} onChange={(event) => (updateItemInCart(Number(event.target.value), id))} />
                <button onClick={() => addToCart(id)} > + </button>
            </div>
            </div>
        </div>
    )
}

export default ItemsInCart;