import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { allPlants } from "../allPlants";
import "./plantDetail.css";

function PlantDetail() {
    // useParams() allows access to parts of URL (like IDs) inside our component. we set up the path="/plant/:id" path in App.js
    const { id } = useParams();
    const { addToCart, cartItems, filteredPlants} = useContext(ShopContext);

    // Find the plant in the filteredPlants array
    const plant = allPlants.find((plant) => plant.id === parseInt(id));
    if (!plant ) {
        return <div>Plant not found</div>;
    }

    // Check if cartItems is defined and if it contains the quantity of the item with the specified id.
    // If cartItems is undefined or the item quantity is not found, set cartItemQuantity to 0.
    let cartItemAmount = 0
    if (cartItems){
        cartItemAmount = cartItems[id] || 0;
    }
    
    return (
        <div className="card-container">
            <div className="card-image">
                <img
                    src={plant.plantImage}
                    alt={plant.name}
                />
            </div>
            <div className="card-details">
                <h1>{plant.plantName}</h1>
                <div className="description">
                    {/* ".split('\n')" splits the text in "plant.description" into paragraphs when there's a newline character ('\n'). */}
                    {/* ".map((paragraph, index)" loops over each paragraph that resulted from splitting the text and performs an action for each one. */}
                    {plant.description.split('\n').map((paragraph, index) => (  
                        <p key={index}>{paragraph}</p> //  "key={index}" <- unique identifier.
                    ))}
                </div>
                <p><b>Price: £{plant.price}</b></p>
                <button className="addToBasketBttn" onClick={() => addToCart(id)}>
                    Add to basket
                    {cartItemAmount > 0 && ` (${cartItemAmount})`}
                </button>
            </div>
        </div>
    );

}

export default PlantDetail;
