import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";


function Plant({data}) { // grabbing the data prop from shop.js 
    const { id, plantImage, plantName } = data; // Destructuring props.data to access all the data each plants has like: id, plantImage, price, plantName
    const { addToCart, cartItems } = useContext(ShopContext); // Using usecontext hook to access 

    return (
        <div className="plant">
            <Link to={`/plant/${id}`}>
                <img src={plantImage} alt={plantName} />
            </Link>
            <div className="description">
                <h3>
                {plantName}
                </h3>
            </div>
        </div>
    );
};

export default Plant;
