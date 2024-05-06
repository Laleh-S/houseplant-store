import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { allPlants } from "../allPlants";
import "./plantDetail.css";

function PlantDetail() {
    // useParams() allows access to parts of URL (like IDs) inside our component. we set up the path="/plant/:id" path in App.js
    const { id } = useParams();
    const { addToCart, cartItems } = useContext(ShopContext);

    const plant = allPlants.find((plant) => plant.id === parseInt(id));
    if (!plant) {
        return <div>Plant not found</div>;
    }

    const cartItemAmount = cartItems[id];  // The amount of this spesific id in our cart
    const PlantDescription = ({ description }) => { //using destructuring to extract the description prop from 
        return <div dangerouslySetInnerHTML={{ __html: description }} />;
    };


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
                <PlantDescription description={plant.description} />
                <p>Price: £{plant.price}</p>
                <button className="addToCartBttn" onClick={() => addToCart(id)}>
                    Add to basket
                    {cartItemAmount > 0 && ` (${cartItemAmount})`}
                </button>
            </div>
        </div>
    );

}

export default PlantDetail;
