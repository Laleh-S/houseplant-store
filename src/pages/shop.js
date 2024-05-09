import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";
import { allPlants } from "../allPlants";
import "./shop.css";

function Shop() {
    const { searchQuery, setSearchQuery } = useContext(ShopContext);
    // Function to filter plants based on the search query
    
    const filteredPlants = allPlants.filter(plant =>
        plant.plantName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="shop">
            <div className="plants">
                {filteredPlants.map((plant)=> { 
                    const { id, plantImage, plantName } = plant;
                    return (
                        <div className="plant" key={id}>
                            <Link  to={`/plant/${id}`}>
                                <img  src={plantImage} alt={plantName} />
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