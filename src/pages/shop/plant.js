import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function Plant(props) {
    const { id, plantImage, price, plantName } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext); // Add whatever function we want to access here.

    const cartItemAmount = cartItems[id]; // The amount of this spesific id in our cart
    return (
        <div className="plant">
            <img src={plantImage} />
            <div className="description"></div>
            <p> 
                <b>{plantName}</b>
            </p>
            <p> 
                £{price}
            </p>
            {/* When user clicks on the button, we want to call "addToCart" function onClick={() => addToCart(id)} */}
            <button className="addToCartBttn" onClick={() => addToCart(id)}> 
                Add to bag
                {/* If cartItemAmount > 0 then we want to display cartItemAmount which is a number showing the number of items in cart */}
                <span> 
                    {cartItemAmount > 0 && <> ({cartItemAmount})  </>}
                </span>
            
                    

                
            </button>
        </div>
    );

};

export default Plant;
