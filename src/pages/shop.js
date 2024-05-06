import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { allPlants } from "../allPlants";
import "./shop.css";

function Shop() {
    const { addToCart, cartItems } = useContext(ShopContext);

    return (
        <div className="shop">
            <div className="page-title">
                <img src="/logo512.png" width={80}/>
                <h1>Evergreen Plants</h1>
            </div>
            <div className="plants">
                {allPlants.map((plant)=> { 
                    const { id, plantImage, plantName } = plant;
                    return (
                        <div className="plant" key={id}>
                            <Link  to={`/plant/${id}`}>
                                <img className="image" src={plantImage} alt={plantName} />
                            </Link>
                            <div className="plant-name">
                                <h3>{plantName}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Shop;